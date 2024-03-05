import path from "path";

const __dirname = path.resolve();
export default {
	ssr: {
		external: ["shikiji"],
		noExternal: [
			"@radix-ui/react-tabs",
			"@astrojs/vercel",
			"@astrojs/react",
			"@astrojs/solid-js",
		],
	},
	resolve: {
		alias: {
			$: path.resolve(__dirname, "./src"),
			$util: path.resolve(__dirname, "./src/util"),
			$components: path.resolve(__dirname, "./src/components"),
			$state: path.resolve(__dirname, "./src/components/state"),
			$layouts: path.resolve(__dirname, "./src/layouts"),
		},
	},
};
