import {
	createTRPCClient,
	createTRPCProxyClient,
	httpBatchLink,
} from "@trpc/client";
import type { AppRouter } from "$rpc/router.ts";

const isLocalhost = import.meta.env.MODE === "development";
const trpc = createTRPCClient<AppRouter>({
	links: [
		httpBatchLink({
			url: isLocalhost ? "http://localhost:4333" : "http://localhost:4333",
		}),
	],
});

export default trpc;
