import {createTRPCClient, createTRPCProxyClient, httpBatchLink} from "@trpc/client";
import type { AppRouter } from "$rpc/router.ts";
//     👆 **type-only** import

const isLocalhost = import.meta.env.mode === "development";
// Pass AppRouter as generic here. 👇 This lets the `trpc` object know
// what procedures are available on the server and their input/output types.
const trpc = createTRPCProxyClient<AppRouter>({
  links: [
    httpBatchLink({
      url: isLocalhost ? "http://localhost:4333" : "http://localhost:4333",
    }),
  ],
});

export default trpc;
