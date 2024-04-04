import type { APIRoute } from "astro";
import type { Value } from "@libsql/core/api";
import { getCollection } from "astro:content";
import { getViewsBySlug } from "$services/turso.js";
// import { getViewsBySlug as inMemoryGetViews } from "$services/memory.ts";

// const getViewsFn = import.meta.env.PROD ? getViewsBySlug : inMemoryGetViews;
const getViewsFn = getViewsBySlug;

export const prerender = false;
// export async function getStaticPaths() {
//   const posts = await getCollection("blog");
//   return posts.map((post) => ({
//     params: { slug: post.slug },
//   }));
// }

export const GET: APIRoute = async ({ params, request }) => {
	let views: Value | number = 0;
	const { searchParams } = new URL(request.url);
	const shouldIncrement = searchParams.get("increment") === "true";
	if (params.slug) {
		views = await getViewsFn(params.slug, shouldIncrement);
	}
	return new Response(
		JSON.stringify(
			{ views },
			(_, value) => (typeof value === "bigint" ? value.toString() : value), // return everything else unchanged
		),
	);
};
