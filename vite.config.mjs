import path from "node:path";
import { loadEnv } from "vite";
import wasm from "vite-plugin-wasm";
import topLevelAwait from "vite-plugin-top-level-await";

// const env = loadEnv(process.env.NODE_ENV, process.cwd(), "");

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
  // define: {
  // __APP_ENV__: JSON.stringify(process.env.APP_ENV),
  // },
  resolve: {
    alias: {
      $: path.resolve(__dirname, "./src"),
      $api: path.resolve(__dirname, "./src/pages/api"),
      $util: path.resolve(__dirname, "./src/util"),
      $components: path.resolve(__dirname, "./src/components"),
      $state: path.resolve(__dirname, "./src/components/state"),
      $layouts: path.resolve(__dirname, "./src/layouts"),
      $prisma: path.resolve(__dirname, "./prisma"),
      $services: path.resolve(__dirname, "./src/services"),
      $rpc: path.resolve(__dirname, "./rpc-server"),
      ".prisma/client/index-browser":
        "./node_modules/@prisma/client/index-browser.js",
    },
  },
};
