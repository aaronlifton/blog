import { initTRPC } from "@trpc/server";
import { Metric } from "astro:db";
import { z } from "zod";
import type { Context, NodeContext } from "./context";

export const t = initTRPC.context<Context>().create({
  allowOutsideOfServer: true,
});
const { createCallerFactory, router } = t;
export const publicProcedure = t.procedure;
// export const apiProcedure = publicProcedure.use((opts) => {
//   // if (!opts.ctx.req || !opts.ctx.res) {
//   //   throw new Error("You are missing `req` or `res` in your call.");
//   // }
//   return opts.next({
//     ctx: {
//       // We overwrite the context with the truthy `req` & `res`, which will also overwrite the types used in your procedure.
//       req: opts.ctx.req,
//       res: opts.ctx.res,
//     },
//   });
// });
//

export const appRouter = t.router({
  incrementMetric: publicProcedure
    .input(z.object({
      metricType: z.string(),
      postSlug: z.string(),
    }))
    .mutation(async (resolver) => {
      console.log({ resolver });
      const { db } = resolver.ctx;
      const { metricType, postSlug } = resolver.input;
      const values: typeof Metric.$inferInsert = {
        metricType,
        postSlug,
        value: 1,
      };
      return await db.insert(Metric).values(values).returning();
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
