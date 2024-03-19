import { FetchCreateContextFnOptions } from '@trpc/server/adapters/fetch';
type CreateAstroContextOptions = Partial<{
	/** The incoming request. */
	req: Request;
	/** The outgoing headers. */
	resHeaders: Headers;
}>;
const createInnerTRPCContext = (opts: CreateContextOptions) => {
	const contextInner = createInnerTRPCContext({});
	return {
		...contextInner,
		...opts,
	};
};
export function createContext({
  req,
  resHeaders,
}: FetchCreateContextFnOptions) {
  return { req, resHeaders,  };
}
export type Context = Awaited<ReturnType<typeof createContext>>;
