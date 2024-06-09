import db from "@astrojs/db";
import mdx from "@astrojs/mdx";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import svelte from "@astrojs/svelte";
import tailwind from "@astrojs/tailwind";
import vercel from "@astrojs/vercel/serverless";
import {
  transformerNotationDiff,
  transformerNotationHighlight,
  transformerNotationWordHighlight,
} from "@shikijs/transformers";
import { transformerTwoslash } from "@shikijs/twoslash";
import icon from "astro-icon";
import robotsTxt from "astro-robots-txt";
import { defineConfig } from "astro/config";
import path, { dirname } from "node:path";
import { fileURLToPath } from "node:url";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import { remarkShakuCodeAnnotate } from "remark-shaku-code-annotate";
import tokyoNight from "tm-themes/themes/tokyo-night.json";
import svgr from "vite-plugin-svgr";
import customImageResizer from "./bin/processImages.mjs";
import { remarkReadingTime } from "./src/plugins/remark-reading-time";
import { remarkSummary } from "./src/plugins/remark-summary";
const __dirname = dirname(fileURLToPath(import.meta.url));

/**
 * @type {import('astro').AstroConfig}
 */

// https://astro.build/config
export default defineConfig({
  output: "server",
  adapter: vercel(),
  site: "https://www.railsdev.dev",
  // prefetch: true,
  integrations: [
    customImageResizer,
    mdx(),
    sitemap(),
    tailwind({
      applyBaseStyles: false,
      nesting: true,
    }),
    svelte(),
    icon(),
    react({}),
    robotsTxt(),
    sitemap(),
    db(),
  ],
  markdown: {
    remarkPlugins: [
      // @ts-expect-error - This is a valid plugin that returns a Transformer,
      // but the type definition is not compatible with the expected [unified.Plugin, string[]] type.
      [remarkShakuCodeAnnotate, {
        fallbackToShiki: false,
        theme: tokyoNight,
        // dprint-ignore
        langs: ["bash", "fish", "go", "html", "javascript", "json", "jsonc", "jsx", "lua", "ruby", "sh", "ts", "ts", "tsx", "typescript", "vim", "yaml", "toml", "rb", "yml"],
      }],
      remarkReadingTime,
      remarkSummary,
    ],
    rehypePlugins: [[rehypeAutolinkHeadings, {
      behavior: "append",
    }]],
    shikiConfig: {
      // @ts-expect-error
      theme: tokyoNight,
      transformers: [
        transformerTwoslash({
          explicitTrigger: true,
        }),
        // @ts-ignore
        transformerNotationDiff(),
        // @ts-ignore
        transformerNotationHighlight(),
        // @ts-ignore
        transformerNotationWordHighlight(),
      ],
    },
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
    plugins: [svgr({
      include: "**/*.svg?react",
      svgrOptions: {
        plugins: ["@svgr/plugin-svgo", "@svgr/plugin-jsx"],
        svgoConfig: {
          plugins: ["preset-default", "removeTitle", "removeDesc", "removeDoctype", "cleanupIds"],
        },
      },
    })],
  },
  image: {
    domains: ["cloudinary.com"],
  },
  redirects: {
    "/blog": {
      status: 308,
      destination: "/blog/1",
    },
  },
});

