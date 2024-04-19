import { type CollectionEntry, getCollection } from "astro:content";

async function getLivePosts(): Promise<CollectionEntry<"blog">[]> {
  return (await getCollection("blog")).filter((post) => !post.data.draft);
}

export async function getTags(): Promise<string[]> {
  const posts = await getLivePosts();
  return [...new Set(posts.flatMap((post) => post.data.tags))];
}

export async function getPosts(): Promise<CollectionEntry<"blog">[]> {
  return (await getLivePosts())
    .sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());
}

export async function getPostsByTag(tag: string): Promise<CollectionEntry<"blog">[]> {
  return (await getLivePosts())
    .filter((post) => post.data.tags.includes(tag))
    .sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());
}
