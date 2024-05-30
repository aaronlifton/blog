import { initTRPC } from "@trpc/server";
import { Metric } from "astro:db";
import { createInsertSchema, createSelectSchema } from "drizzle-zod";
import { z } from "zod";
import type { Context, NodeContext } from "./context";

export const t = initTRPC.context<NodeContext>().create({
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
    .input(createInsertSchema(Metric).pick({ metricType: true, postSlug: true }))
    .mutation(async (resolver) => {
      const { db } = resolver.ctx;
      const { metricType, postSlug } = resolver.input;
      const values: typeof Metric.$inferInsert = {
        metricType,
        postSlug,
        value: 1,
      };
      const res = await db.insert(Metric).values(values).returning();
    }),
  getCommits: publicProcedure.query((resolver) => {
    const { githubService } = resolver.ctx;
    return githubService.getCommits();
  }),
  // publicProcedure because it's only called on server side
  getFile: publicProcedure
    .input(z.object({
      owner: z.string(),
      repo: z.string(),
      path: z.string(),
    }))
    .query(async (resolver) => {
      const { githubService } = resolver.ctx;
      const response = await githubService.getRepoContents(resolver.input);
      return await response.json();
    }),
});

// export type definition of API
export type AppRouter = typeof appRouter;
export const createCaller = createCallerFactory(appRouter);
