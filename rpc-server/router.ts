import { initTRPC } from "@trpc/server";
import { z } from "zod";
import type { Context } from "./context";
import { getCommits, getRepoContents } from "./services/github";
//
export const t = initTRPC.context<Context>().create();
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
	// getUserById: t.procedure.input(z.string()).query((opts) => {
	//   return users[opts.input]; // input type is string
	// }),
	// createUser: t.procedure
	//   // validate input with Zod
	//   .input(
	//     z.object({
	//       name: z.string().min(3),
	//       bio: z.string().max(142).optional(),
	//     }),
	//   )
	//   .mutation((opts) => {
	//     const id = Date.now().toString();
	//     const user: User = { id, ...opts.input };
	//     users[user.id] = user;
	//     return user;
	//   }),
	getCommits: publicProcedure.query(() => {
		return getCommits();
	}),
	getFile: apiProcedure
		.input(
			z.object({
				owner: z.string(),
				repo: z.string(),
				path: z.string(),
			}),
		)
		.query(async (opts) => {
			const response = await getRepoContents(opts.input);
			return await response.json();
		}),
});

// export type definition of API
export type AppRouter = typeof appRouter;
export const createCaller = createCallerFactory(appRouter);
