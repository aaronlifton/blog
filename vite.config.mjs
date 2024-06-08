import { loadEnv } from "vite";
import svgr from "vite-plugin-svgr";

if (!process.env.NODE_ENV) {
  throw new Error("Missing NODE_ENV");
}
loadEnv(process.env.NODE_ENV, process.cwd(), "");
const __dirname = path.resolve();

/** @type {import('vite').UserConfig} */
export default {
  plugins: [
    svgr({
      include: "**/*.svg?react",
    }),
  ],
};
