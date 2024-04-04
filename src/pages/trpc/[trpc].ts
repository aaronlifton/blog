import { fetchRequestHandler } from '@trpc/server/adapters/fetch';
import type { APIRoute } from 'astro';
// import { createContext } from '../../server/context';
import { appRouter } from '$rpc/router';
export const prerender = false;
export const ALL: APIRoute = (opts) => {
  return fetchRequestHandler({
    endpoint: '/trpc',
    req: opts.request,
    router: appRouter,
    createContext: ({ req, resHeaders }) => {
			return { req, resHeaders };
		},
		onError({ error }) {
			if (import.meta.env.DEV && error.code === 'INTERNAL_SERVER_ERROR') {
				throw error;
			}
		}
  });
};
