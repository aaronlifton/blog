import path from "path";

const __dirname = path.resolve();
export default {
  ssr: {
    noExternal: ["@radix-ui/react-tabs", "@astrojs/vercel", "@astrojs/react"],
  },
  resolve: {
    alias: {
      $: path.resolve(__dirname, "./src"),
      $util: path.resolve(__dirname, "./src/util"),
      $components: path.resolve(__dirname, "./src/components"),
      $layouts: path.resolve(__dirname, "./src/layouts"),
    },
  },
};
