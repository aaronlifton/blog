import type { APIRoute } from "astro";
import { getCollection, type CollectionEntry } from "astro:content";

const allBlogPosts = await getCollection("blog");
const livePosts = allBlogPosts.filter(
	(post: CollectionEntry<"blog">) => !post.data.draft,
);
const data = livePosts.map((post) => ({
	slug: post.slug,
	...post.data,
}));
export const GET: APIRoute = async ({ request: _ }) => {
	return new Response(JSON.stringify({ posts: data }));
};
