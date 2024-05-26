import prisma from "~services/prisma";
import type { FetchCreateContextFnOptions } from "@trpc/server/adapters/fetch";
// import type { CreateNextContextOptions } from '@trpc/server/adapters/next';
import githubService from "./services/github";

interface CreateInnerContextOptions
	extends Partial<FetchCreateContextFnOptions> {}
/**
 * Inner context. Will always be available in your procedures, in contrast to the outer context.
 *
 * Also useful for:
 * - testing, so you don't have to mock Next.js' `req`/`res`
 * - tRPC's `createServerSideHelpers` where we don't have `req`/`res`
 *
 * @link https://trpc.io/docs/v11/context#inner-and-outer-context
 */
export async function createContextInner(opts?: CreateInnerContextOptions) {
	return {
		prisma,
		githubService,
	};
}

export async function createContext({
	req,
	resHeaders,
}: FetchCreateContextFnOptions) {
	const contextInner = await createContextInner({});
	return { ...contextInner, req: req, resHeaders: resHeaders };
}
export type Context = Awaited<ReturnType<typeof createContext>>;
