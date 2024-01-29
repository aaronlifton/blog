import { defineConfig, squooshImageService } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import vercel from "@astrojs/vercel/serverless";
import { remarkShakuCodeAnnotate } from "remark-shaku-code-annotate";
import customImageResizerIntegration from "./processImages.mjs";
import { transformerTwoslash } from "shikiji-twoslash";
import svelte from "@astrojs/svelte";
// import { addClassToHast, codeToHtml } from "shikiji";

export default defineConfig({
  output: "hybrid",
  site: "https://example.com",
  integrations: [
    mdx(),
    sitemap(),
    tailwind(),
    customImageResizerIntegration,
    svelte(),
  ],
  markdown: {
    remarkPlugins: [
      [
        remarkShakuCodeAnnotate,
        {
          themes: ["github-dark", "material-theme-darker"],
        }
      ]
    ],
    shikiConfig: {
      theme: "material-theme-darker",
      transformers: [
        (node) => {
          // Fix Astro <pre tabIndex="0"> bug to achieve perfect lighthouse score.
          console.log({node})
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
  },
  image: {
    service: squooshImageService(),
  },
  adapter: vercel(),
});
