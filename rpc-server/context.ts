import type { FetchCreateContextFnOptions } from "@trpc/server/adapters/fetch";
import type { NodeHTTPCreateContextFnOptions } from "@trpc/server/adapters/node-http";
import { db } from "astro:db";
import type { IncomingMessage, ServerResponse } from "node:http";
import type ws from "ws";
import githubService from "./services/github";

export async function createContextInner() {
  return {
    db,
    githubService,
  };
}

export async function createContext({
  req,
  resHeaders,
}: FetchCreateContextFnOptions) {
  const contextInner = await createContextInner();
  return { ...contextInner, req, resHeaders };
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
