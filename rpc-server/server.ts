import { initTRPC } from "@trpc/server";
import { createHTTPServer } from "@trpc/server/adapters/standalone";
import cors from "cors";
import { createContext, createNodeContext } from "./context.ts";
import { appRouter } from "./router.ts";

createHTTPServer({
  middleware: cors(),
  router: appRouter,
  createContext: createNodeContext,
}).listen(3333);
