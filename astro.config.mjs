import { defineConfig, squooshImageService } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import path, { dirname } from "path";
import { fileURLToPath } from "url";
import tailwind from "@astrojs/tailwind";
import vercel from "@astrojs/vercel/serverless";
import { remarkShakuCodeAnnotate } from "remark-shaku-code-annotate";
// import customImageResizerIntegration from "./processImages.mjs";
import { transformerTwoslash } from "shikiji-twoslash";
import svelte from "@astrojs/svelte";
import icon from "astro-icon";
import react from "@astrojs/react";
const __dirname = dirname(fileURLToPath(import.meta.url));

// https://astro.build/config
export default defineConfig({
  output: "hybrid",
  site: "https://example.com",
  integrations: [
    mdx(),
    sitemap(),
    tailwind({ applyBaseStyles: false, nesting: true }),
    // customImageResizerIntegration,
    svelte(),
    icon(),
    react(),
  ],
  markdown: {
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
    ],
    shikiConfig: {
      theme: "material-theme-darker",
      transformers: [
        (node) => {
          if (node.type === "element" && node.tagName === "pre") {
            const tabIndexNode = node.getAttributeNode("tabIndex");
            node.removeAttributeNode(tabIndexNode);
          }
          return node;
        },
        transformerTwoslash(),
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
  },
  image: {
    service: squooshImageService(),
  },
  adapter: vercel(),
  redirects: {
    "/blog": {
      status: 308,
      destination: "/blog/1",
    },
  },
});

