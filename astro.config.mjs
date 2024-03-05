import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import { defineConfig, squooshImageService } from "astro/config";
import path, { dirname } from "path";
import { remarkShakuCodeAnnotate } from "remark-shaku-code-annotate";
import { fileURLToPath } from "url";
// import customImageResizerIntegration from "./processImages.mjs";
import react from "@astrojs/react";
import svelte from "@astrojs/svelte";
import bun from "astro-bun-adapter";
import icon from "astro-icon";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import { transformerTwoslash } from "shikiji-twoslash";
import svgr from "vite-plugin-svgr";
import { remarkReadingTime } from "./src/plugins/remark-reading-time";
// import solid from "@astrojs/solid-js";
import cloudflare from "@astrojs/cloudflare";
const __dirname = dirname(fileURLToPath(import.meta.url));


// https://astro.build/config
export default defineConfig({
  output: "server",
  adapter: cloudflare(),
  site: "https://example.com",
  // prefetch: true,
  integrations: [mdx({}), sitemap(), tailwind({
    applyBaseStyles: false,
    nesting: true
  }),
  // customImageResizerIntegration,
  svelte(), icon(),
  // solid({
  //   include: ["**/solid/*"],
  // }),
  react({})],
  markdown: {
    remarkPlugins: [remarkReadingTime, [remarkShakuCodeAnnotate, {
      fallbackToShiki: true,
      theme: "material-theme-darker",
      offset: "2",
      lang: ["tsx", "jsx", "typescript", "sh", "fish", "json"]
    }]],
    rehypePlugins: [[rehypeAutolinkHeadings, {
      behavior: "append"
    }]],
    shikiConfig: {
      theme: "material-theme-darker",
      transformers: [node => {
        if (node.type === "element" && node.tagName === "pre") {
          const tabIndexNode = node.getAttributeNode("tabIndex");
          node.removeAttributeNode(tabIndexNode);
        }
        return node;
      }, transformerTwoslash()]
    },
    extendDefaultPlugins: true
  },
  vite: {
    ssr: {
      noExternal: ["@radix-ui/react-tabs"]
    },
    resolve: {
      alias: {
        $: path.resolve(__dirname, "./src")
      }
    },
    plugins: [svgr({
      include: "**/*.svg?react",
      svgrOptions: {
        plugins: ["@svgr/plugin-svgo", "@svgr/plugin-jsx"],
        svgoConfig: {
          plugins: ["preset-default", "removeTitle", "removeDesc", "removeDoctype", "cleanupIds"]
        }
      }
    })]
  },
  image: {
    service: squooshImageService()
  },
  redirects: {
    "/blog": {
      status: 308,
      destination: "/blog/1"
    }
  }
});