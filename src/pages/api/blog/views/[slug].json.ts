import type { APIRoute } from "astro";
import type { Value } from "@libsql/core/api";
import { getCollection } from "astro:content";
import { getViewsBySlug } from "../../../../services/turso.js";
import { getViewsBySlug as inMemoryGetViews } from "../../../../services/memory.js";

const getViewsFn = import.meta.env.PROD ? getViewsBySlug : inMemoryGetViews;

export async function getStaticPaths() {
	const posts = await getCollection("blog");
	return posts.map((post) => ({
		params: { slug: post.slug },
	}));
}

export const GET: APIRoute = async ({ params, request: _ }) => {
	let views: Value | number = 0;
	if (params.slug) {
		views = await getViewsFn(params.slug);
	}
	return new Response(JSON.stringify({ views }));
};
