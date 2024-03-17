import { createHTTPServer } from '@trpc/server/adapters/standalone';
import { z } from 'zod';
import { Context } from './context';
import { getCommits } from './services/github';
import { publicProcedure, router } from './trpc';
 
import { loadEnv } from "vite";
// const env = loadEnv(process.env.NODE_ENV, process.cwd(), "");
export const t = initTRPC.context<Context>().create();
const appRouter = router({
  gitCommits: publicProcedure.query(async () => {
    const commits = await getCommits(); 
    return commits;
  })
});
 
// Export type router type signature,
// NOT the router itself.
export type AppRouter = typeof appRouter;

const server = createHTTPServer({
  router: appRouter,
});
 
server.listen(4333);
