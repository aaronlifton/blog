import path from "node:path";
import { createRequire } from "node:module";

const prismaClientPath = createRequire(import.meta.url).resolve(
	"@prisma/client",
);

const __dirname = path.resolve();
export default {
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
	resolve: {
		alias: {
			$: path.resolve(__dirname, "./src"),
			$api: path.resolve(__dirname, "./src/pages/api"),
			$util: path.resolve(__dirname, "./src/util"),
			$components: path.resolve(__dirname, "./src/components"),
			$state: path.resolve(__dirname, "./src/components/state"),
			$layouts: path.resolve(__dirname, "./src/layouts"),
			$prisma: path.resolve(__dirname, "./prisma"),
			".prisma/client/index-browser":
				"./node_modules/@prisma/client/index-browser.js",
			// ".prisma/client/index-browser": prismaClientPath.replace(
			// 	"@prisma/client/default.js",
			// 	".prisma/client/index-browser.js",
			// ),
		},
	},
};
