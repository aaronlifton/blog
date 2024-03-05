import { g as getCollection } from './_slug__ZSB9XKnz.mjs';

const allBlogPosts = await getCollection("blog");
const livePosts = allBlogPosts.filter(
  (post) => !post.data.draft
);
const data = livePosts.map((post) => ({
  slug: post.slug,
  ...post.data
}));
const GET = async ({ request: _ }) => {
  return new Response(JSON.stringify({ posts: data }));
};

export { GET };
