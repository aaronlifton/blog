import mdx from "@astrojs/mdx";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
// import customImageResizerIntegration from "./processImages.mjs";
import svelte from "@astrojs/svelte";
import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";
import {defineConfig, squooshImageService} from "astro/config";
// import remarkExpressiveCode from "remark-expressive-code";
import {remarkShakuCodeAnnotate, type ShakuHighlighterOptions } from "remark-shaku-code-annotate";
// import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import expressiveCode from "astro-expressive-code"
// import { expressiveCodeOptions, shikiConfig,} from "./astro.rendering.config.ts";
// import rehypePrettyCode from "rehype-pretty-code";
import viteConfig from "./vite.config.mjs";


const remarkShakuCodeAnnotateOptions: ShakuHighlighterOptions = {
  fallbackToShiki: true,
  theme: "material-theme-darker",
  langs: ["tsx", "jsx", "typescript", "sh", "fish", "json"],
}
const remarkExpressiveCodeOptions = {
  highlightTheme: "andromeda",
}

// https://astro.build/config
export default defineConfig({
  output: "hybrid", //"hybrid",
  site: "https://example.com",
  markdown: {
    syntaxHighlight: "shiki",
    shikiConfig: {
      theme: "material-theme-darker",
      transformers: [
        (node: Node): void => {
          if (node.type === "element" && node.tagName === "pre") {
            const tabIndexNode = node.getAttributeNode("tabIndex");
            node.removeAttributeNode(tabIndexNode);
          }
          return node;
        },
        transformerTwoslash(),
      ],
    },
    remarkPlugins: [
      [
        remarkShakuCodeAnnotate,
        {
          fallbackToShiki: true,
          theme: "material-theme-darker",
          offset: "2",
          lang: ["tsx", "jsx", "typescript", "sh", "fish", "json"],
        },
      ],
    ]
  },
  integrations: [
    mdx({extendMarkdownConfig: true}),
    sitemap(),
    tailwind({
      applyBaseStyles: false,
      nesting: true,
    }),
    svelte(),
    icon(),
    react(),
  ],
  vite: viteConfig,
  image: {
    // customImageResizerIntegration,
    service: squooshImageService(),
  },
  redirects: {
    "/blog": {
      status: 308,
      destination: "/blog/1",
    },
  },
  devToolbar: { enabled: false },
});
