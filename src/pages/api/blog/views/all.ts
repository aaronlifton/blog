import type { APIRoute } from "astro";
import { getCollection } from "astro:content";
import { getViews } from "$/services/turso.js";
import { getViews as getViewsInMem } from "$/services/memory.ts";

const getViewsFn = import.meta.env.PROD ? getViews : getViewsInMem;

export const prerender = true;
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
