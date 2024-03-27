import trpc from "$services/trpc";
import { createCaller } from "$rpc/router";
import prisma from "$services/db";
import type { APIRoute } from "astro";

export const GET: APIRoute = async ({ params, request, cookies }) => {
	const queryParams = new URLSearchParams(request.url.split("?")[1]);
	const parsedParams = Object.fromEntries(queryParams.entries());
	console.log({ parsedParams });
	const { owner, repo, path } = parsedParams;
	if (!owner || !repo || !path) {
		return new Response(JSON.stringify({ error: "Missing params" }), {
			status: 400,
		});
	}
	const resHeaders = new Headers();
	const caller = createCaller({
		req: request,
		resHeaders: new Headers(),
		prisma: prisma,
	});
	const data = await caller.getFile({ owner, repo, path });

	return new Response(JSON.stringify(data));
};
