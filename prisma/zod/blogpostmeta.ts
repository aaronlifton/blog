import * as z from "zod";

export const BlogPostMetaModel = z.object({
  id: z.string(),
  postSlug: z.string(),
  numViews: z.bigint(),
});
