import path from "node:path";
import { loadEnv } from "vite";
import topLevelAwait from "vite-plugin-top-level-await";
import wasm from "vite-plugin-wasm";

if (!process.env.NODE_ENV) {
  throw new Error("Missing NODE_ENV");
}
loadEnv(process.env.NODE_ENV, process.cwd(), "");

const __dirname = path.resolve();
export default {
  plugins: [wasm(), topLevelAwait()],
  ssr: {
    external: ["shikiji"],
    noExternal: [
      "@radix-ui/react-tabs",
      "@astrojs/vercel",
      "@astrojs/react",
      "@astrojs/solid-js",
      "cookie",
    ],
  },
};
