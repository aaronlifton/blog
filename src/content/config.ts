import { defineCollection, z } from "astro:content";

// const minImageWidth = 720;
const minImageWidth = 300;
const blog = defineCollection({
  type: "content",
  schema: ({image}) => z.object({
    title: z.string(),
    description: z.string(),
    // Transform string to Date object
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    cover: image().refine((img: { width: number}) => img.width >= minImageWidth, {
      message: "Image must be at least 720px wide",
    }),
    coverAlt: z.string(),
    tags: z.array(z.string()),
    draft: z.boolean().optional()
  }),
});

export const collections = { blog };
