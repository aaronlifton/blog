import path, { dirname } from "node:path";
import { fileURLToPath } from "node:url";
import mdx from "@astrojs/mdx";
// import solid from "@astrojs/solid-js";
import node from "@astrojs/node";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import svelte from "@astrojs/svelte";
import tailwind from "@astrojs/tailwind";
import { transformerTwoslash } from "@shikijs/twoslash";
import icon from "astro-icon";
import robotsTxt from "astro-robots-txt";
import { defineConfig, squooshImageService } from "astro/config";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import { remarkShakuCodeAnnotate } from "remark-shaku-code-annotate";
import remarkShikiTwoSlash from "remark-shiki-twoslash";
import svgr from "vite-plugin-svgr";
import customImageResizer from "./bin/processImages.mjs";
import { remarkReadingTime } from "./src/plugins/remark-reading-time";
import { remarkSummary } from "./src/plugins/remark-summary";
import {
	transformerNotationDiff,
	transformerNotationWordHighlight,
} from "@shikijs/transformers";
const __dirname = dirname(fileURLToPath(import.meta.url));

// https://astro.build/config
/**
 * @type {import('astro').AstroConfig}
 */
export default defineConfig({
	output: "server",
	adapter: node({
		mode: "standalone",
	}),
	site: "https://www.railsdev.dev",
	// prefetch: true,
	integrations: [
		customImageResizer,
		mdx({
			remarkPlugins: [
				remarkReadingTime,
				// @ts-expect-error - This is a valid plugin that returns a Transformer,
				// but the type definition is not compatible with the expected [unified.Plugin, string[]] type.
				// remarkPlugins accepted both unified.Plugin, [unified.Plugin, string[]] and [unified.Plugin, { [key: string]: any }] types.
				[remarkShikiTwoSlash.default, { theme: "material-theme-darker" }],
				remarkSummary,
			],
		}),
		sitemap(),
		tailwind({
			applyBaseStyles: false,
			nesting: true,
		}),
		svelte(),
		icon(),
		// solid({
		//   include: ["**/solid/*"],
		// }),
		react({}),
		robotsTxt(),
		sitemap(),
	],
	markdown: {
		remarkPlugins: [
			// @ts-expect-error - This is a valid plugin that returns a Transformer,
			// but the type definition is not compatible with the expected [unified.Plugin, string[]] type.
			[
				remarkShakuCodeAnnotate,
				{
					fallbackToShiki: true,
					theme: "material-theme-darker",
					langs: [
						"bash",
						"fish",
						"go",
						"html",
						"javascript",
						"json",
						"jsonc",
						"jsx",
						"lua",
						"ruby",
						"sh",
						"ts",
						"ts",
						"tsx",
						"typescript",
						"vim",
					],
				},
			],
		],
		rehypePlugins: [
			[
				rehypeAutolinkHeadings,
				{
					behavior: "append",
				},
			],
		],
		shikiConfig: {
			theme: "material-theme-darker",
			transformers: [
				transformerNotationDiff(),
				transformerNotationWordHighlight(),
			],
		},
		extendDefaultPlugins: true,
	},
	vite: {
		ssr: {
			noExternal: ["@radix-ui/react-tabs"],
		},
		resolve: {
			alias: {
				$: path.resolve(__dirname, "./src"),
			},
		},
		plugins: [
			svgr({
				include: "**/*.svg?react",
				svgrOptions: {
					plugins: ["@svgr/plugin-svgo", "@svgr/plugin-jsx"],
					svgoConfig: {
						plugins: [
							"preset-default",
							"removeTitle",
							"removeDesc",
							"removeDoctype",
							"cleanupIds",
						],
					},
				},
			}),
		],
	},
	image: {
		service: squooshImageService(),
	},
	redirects: {
		"/blog": {
			status: 308,
			destination: "/blog/1",
		},
	},
});
