import type { APIRoute } from "astro";
import type { Value } from "@libsql/core/api";
import { getCollection } from "astro:content";
import { getViews } from "../../../../services/turso.js";
import { getViews as getViewsInMem } from "../../../../services/memory.js";

const getViewsFn = import.meta.env.PROD ? getViews : getViewsInMem;

export const prerender = true;
export async function getStaticPaths() {
	const posts = await getCollection("blog");
	return posts.map((post) => ({
		params: { slug: post.slug },
	}));
}

export const GET: APIRoute = async ({ params, request: _ }) => {
	const views = await getViews();
	return new Response(JSON.stringify({ views }));
};
