import type { FetchCreateContextFnOptions } from "@trpc/server/adapters/fetch";
import type { NodeHTTPCreateContextFnOptions } from "@trpc/server/adapters/node-http";
import { db } from "astro:db";
import type { IncomingMessage, ServerResponse } from "node:http";
import type { Database } from "node_modules/@astrojs/db/dist/_internal/runtime/virtual.js";
import githubService from "./services/github";

// interface InnerContextOptions {
//   db: import("node_modules/@astrojs/db/dist/_internal/runtime/virtual.js").Database;
//   githubService: typeof githubService;
// }
/** Use this helper for:
 * - testing, so we dont have to mock Next.js' req/res
 * - trpc's `createSSGHelpers` where we don't have req/res
 * @see https://create.t3.gg/en/usage/trpc#-servertrpccontextts
 */
export async function createContextInner() {
  return {
    db,
    githubService,
  };
}

interface ContextOptions extends FetchCreateContextFnOptions {
  db: Database;
  githubService: typeof githubService;
}
export async function createContext({
  req,
  resHeaders,
}: FetchCreateContextFnOptions) {
  const contextInner = await createContextInner();
  // return { ...contextInner, req, resHeaders };
  return { ...contextInner };
}
export type Context = Awaited<ReturnType<typeof createContext>>;

export async function createNodeContext({
  req,
  res,
}: NodeHTTPCreateContextFnOptions<IncomingMessage, ServerResponse<IncomingMessage>>) {
  const contextInner = await createContextInner();
  return { ...contextInner, req, res };
  // NodeHTTPCreateContextFnOptions<IncomingMessage, ServerResponse<IncomingMessage>>
}
export type NodeContext = Awaited<ReturnType<typeof createNodeContext>>;
