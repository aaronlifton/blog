import rss from "@astrojs/rss";
import type { APIContext } from "astro";
import { getCollection } from "astro:content";
import { SITE_TITLE, SITE_DESCRIPTION } from "$/consts";

export const prerender = true;

export async function GET() {
  const posts = await getCollection("blog");

  const items = await Promise.all(
    posts.map(async (post) => {
      const { remarkPluginFrontmatter } = await post.render();

      return {
        title: post.data.title,
        pubDate: post.data.pubDate,
        description: remarkPluginFrontmatter.summary,
        link: `/posts/${post.slug}`,
      };
    }),
  );

  return rss({
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    site: import.meta.env.SITE,
    items,
  });
}
