import { getCollection } from "astro:content";

export async function getTags() {
  const posts = await getCollection("blog");
  return [...new Set(posts.flatMap((post) => post.data.tags))];
}

export async function getPosts() {
  return (await getCollection("blog"))
    .filter((post) => !post.data.draft)
    .sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());
}

export async function getPostsByTag(tag: string) {
  return (await getCollection("blog"))
    .filter((post) => !post.data.draft)
    .filter((post) => post.data.tags.includes(tag))
    .sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());
}

// export async function getGuides() {
//   return (await getCollection("guides"))
//     .filter((guide) => guide.data.published)
//     .sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());
// }
