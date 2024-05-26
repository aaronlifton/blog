import { getViews as getViewsInMem } from "~services/memory.ts";
import { getViews } from "~services/turso.js";
import type { APIRoute } from "astro";
import { getCollection } from "astro:content";

export const prerender = false;
export async function getStaticPaths() {
  const posts = await getCollection("blog");
  return posts.map((post) => ({
    params: { slug: post.slug },
  }));
}

export const GET: APIRoute = async ({ params: _params, request: _ }) => {
  const views = await getViews();
  return new Response(JSON.stringify({ views }));
};
