import { initTRPC } from "@trpc/server";
import { createHTTPServer } from "@trpc/server/adapters/standalone";
import { appRouter } from "./router.ts";
import { createContext } from "./context.ts";
import cors from "cors";

createHTTPServer({
	middleware: cors(),
	router: appRouter,
	createContext,
}).listen(3333);
