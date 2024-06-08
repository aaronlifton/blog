import { fetchRequestHandler } from "@trpc/server/adapters/fetch";
import type { APIRoute } from "astro";
import { db } from "astro:db";
import { createContext } from "~rpc/context.ts";
import { appRouter } from "~rpc/router.ts";
import type { AppRouter } from "~rpc/router.ts";
import githubService from "~rpc/services/github";
export const ALL: APIRoute = (opts) => {
  return fetchRequestHandler<AppRouter>({
    endpoint: "/trpc",
    req: opts.request,
    router: appRouter,
    createContext,
    onError: import.meta.env.DEV
      ? ({ path, error }) => {
        console.error(
          `❌ tRPC failed on ${path ?? "<no-path>"}: ${error.message}`,
        );
      }
      : undefined,
  });
};
