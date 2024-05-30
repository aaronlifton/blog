import { type CollectionEntry, getCollection } from "astro:content";
import { serializeError } from "serialize-error";

export const saveError = async (error: ErrorEvent | Error) => {
  const errorEvent = error instanceof ErrorEvent
    ? error
    : new ErrorEvent("error", {
      error: error,
    });
  try {
    return fetch("/api/blog/errors.json", {
      body: JSON.stringify(serializeError(errorEvent)),
      method: "post",
    });
  } catch (e) {
    console.error("Error capturing error", e);
  }
};

async function getLivePosts(featured?: boolean): Promise<CollectionEntry<"blog">[]> {
  return (await getCollection("blog")).filter((post) =>
    !post.data.draft && (featured ? post.data.featured : !post.data.featured)
  );
}

export async function getAllPosts(): Promise<CollectionEntry<"blog">[]> {
  return (await getCollection("blog")).filter((post) => !post.data.draft);
}

export async function getTags(): Promise<string[]> {
  const posts = await getAllPosts();
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
