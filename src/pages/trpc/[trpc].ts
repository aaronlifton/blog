import { fetchRequestHandler } from '@trpc/server/adapters/fetch';
import type { APIRoute } from 'astro';
import { createContext } from /context.ts;
import { appRouter } from /router.ts;
export const ALL: APIRoute = (opts) => {
  return fetchRequestHandler({
    endpoint: '/trpc',
    req: opts.request,
    router: appRouter,
    createContext,
  });
};
