import { defineCollection, z } from "astro:content";
import type { ImageMetadata } from "astro";

const minImageWidth = 300;
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
				(img: ImageMetadata) => img.width >= minImageWidth,
				{
					message: `Image must be at least ${minImageWidth}px wide`,
				},
			),
			coverAlt: z.string(),
			tags: z.array(z.string()),
			draft: z.boolean().optional(),
			minutesRead: z.string().optional(),
		}),
});

export const collections = { blog };
export const siteDescription =
	"A developer blog focusing on Ruby on Rails, React, AstroJS, and Neovim.";
