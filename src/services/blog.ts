import { type CollectionEntry, getCollection } from "astro:content";

async function getLivePosts(featured?: boolean): Promise<CollectionEntry<"blog">[]> {
  return (await getCollection("blog")).filter((post) =>
    !post.data.draft && (featured ? post.data.featured : !post.data.featured)
  );
}

export async function getTags(): Promise<string[]> {
  const posts = await getLivePosts();
  return [...new Set(posts.flatMap((post) => post.data.tags))];
}

export async function getPosts(opts: { featured?: boolean } = {}): Promise<CollectionEntry<"blog">[]> {
  return (await getLivePosts(opts.featured))
    .sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());
}

export async function getPostsByTag(tag: string): Promise<CollectionEntry<"blog">[]> {
  return (await getLivePosts())
    .filter((post) => post.data.tags.includes(tag))
    .sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());
}
