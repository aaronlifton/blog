import { initTRPC } from "@trpc/server";
import { z } from "zod";
import type { Context } from "./context";
import { IncrementMetricInput } from "./types";

export const t = initTRPC.context<Context>().create({
  allowOutsideOfServer: true,
});
const { createCallerFactory, router } = t;
export const publicProcedure = t.procedure;
export const apiProcedure = publicProcedure.use((opts) => {
  if (!opts.ctx.req || !opts.ctx.resHeaders) {
    throw new Error("You are missing `req` or `res` in your call.");
  }
  return opts.next({
    ctx: {
      // We overwrite the context with the truthy `req` & `res`, which will also overwrite the types used in your procedure.
      req: opts.ctx.req,
      res: opts.ctx.resHeaders,
    },
  });
});

export const appRouter = t.router({
  incrementMetric: publicProcedure
    .input(IncrementMetricInput)
    .mutation(async (resolver) => {
      const { prisma } = resolver.ctx;
      const { metricType, slug } = resolver.input;
      const upsert = async () =>
        prisma.metric.upsert({
          where: {
            postSlug: slug,
          },
          create: {
            postSlug: slug,
            metricType,
            value: 1,
          },
          update: {
            value: {
              increment: 1,
            },
          },
          select: {
            postSlug: true,
            value: true,
            metricType: true,
          },
        });
      return await upsert();
    }),
  getCommits: publicProcedure.query((resolver) => {
    const { githubService } = resolver.ctx;
    return githubService.getCommits();
  }),
  // publicProcedure because it's only called on server side
  getFile: publicProcedure
    .input(
      z.object({
        owner: z.string(),
        repo: z.string(),
        path: z.string(),
      }),
    )
    .query(async (resolver) => {
      const { githubService } = resolver.ctx;
      const response = await githubService.getRepoContents(resolver.input);
      return await response.json();
    }),
});

// export type definition of API
export type AppRouter = typeof appRouter;
export const createCaller = createCallerFactory(appRouter);
