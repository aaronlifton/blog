/// <reference types="vitest" />
import { fileURLToPath } from "node:url";
import { getViteConfig } from "astro/config";
import { configDefaults } from "vitest/config";

export default getViteConfig({
	test: {
		globals: true,
		include: ["test/*.test.ts"],
		exclude: [...configDefaults.exclude, "**/playwright/**"],
		alias: {
			"~/rpc": fileURLToPath(new URL("./rpc-server/", import.meta.url)),
			"~/services": fileURLToPath(new URL("./src/services/", import.meta.url)),
		},
		browser: {
			enabled: false,
			name: "chrome", // browser name is required
		},
	},
});
