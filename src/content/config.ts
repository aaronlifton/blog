import type { ImageMetadata } from "astro";
import { defineCollection, reference, z } from "astro:content";

// const minBlogCoverImgWidth = 2500;
const minBlogCoverImgWidth = 250;
const blog = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      // Transform string to Date object
      pubDate: z.coerce.date(),
      updatedDate: z.coerce.date().optional(),
      cover: image().refine(
        (img: ImageMetadata) => img.width >= minBlogCoverImgWidth,
        {
          message: `Image must be at least ${minBlogCoverImgWidth}px wide`,
        },
      ),
      coverAlt: z.string(),
      tags: z.array(z.string()),
      draft: z.boolean().optional(),
      minutesRead: z.string().optional(),
    }),
});

const pageCategories = z.enum([
  "ErrorFix",
  "HowTo",
  "NeovimTip",
  "News",
  "Opinion",
  "Research",
  "Review",
  "Tutorial",
]);
const minPageScreenshotWidth = 2500;
const minPageCoverImgWidth = 1200;
const page = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      pubDate: z.coerce.date(),
      updatedDate: z.coerce.date().optional(),
      screenshot: image().refine(
        (img: ImageMetadata) => img.width >= minPageScreenshotWidth,
        {
          message: `Image must be at least ${minPageScreenshotWidth}px wide`,
        },
      ),
      cover: image().refine(
        (img: ImageMetadata) => img.width >= minPageCoverImgWidth,
        {
          message: `Image must be at least ${minPageCoverImgWidth}px wide`,
        },
      ),
      coverAlt: z.string(),
      tags: z.array(z.string()),
      draft: z.boolean().optional(),
      relatedPosts: z.array(reference("blog")),
    }),
});

export const collections = { blog };
export const siteDescription = "A developer blog focusing on Ruby on Rails, React, AstroJS, and Neovim.";
