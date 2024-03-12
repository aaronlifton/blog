import fs, { type Dirent } from "node:fs";
import path, { dirname } from "node:path";
import { fileURLToPath } from "node:url";

// export const __dirname = dirname(fileURLToPath(import.meta.url));
// export const rootPath = path.resolve(__dirname, "../../");

function getAllPaths(iconsPath: string) {
	let allFilePaths: string[] = [];
	const files: Dirent[] = fs.readdirSync(iconsPath, { withFileTypes: true });

	const getFilePath = (file: Dirent) => path.join(file.path, file.name);

	for (const file of files) {
		const filePath = getFilePath(file);
		if (file.isDirectory()) {
			allFilePaths = allFilePaths.concat(
				getAllPaths(filePath).map((fp) => {
					return path.join(file.name, path.parse(fp).name);
				}),
			);
		} else {
			allFilePaths.push(path.parse(file.name).name);
		}
	}

	return allFilePaths;
}

const icons = getAllPaths(path.resolve("src/icons"));

export const tagIconMap: {
	[key: string]: string;
} = {
	rails: "rails",
	"quick tips": "tabler/bulb-light",
	performance: "tabler/rocket",
	optimization: "tabler/speed",
	monorepo: "tabler/stack",
	osx: "apple",
	terminal: "tabler/terminal",
	productivity: "tabler/inbox",
	compilers: "tabler/cpp",
};

const iconCache = new Map<string, string | null>();
export const iconForTag = (tag: string) => {
	if (iconCache.has(tag)) {
		return iconCache.get(tag);
	}
	const iconName = tagIconMap[tag] || tag;
	if (!icons.includes(iconName)) {
		iconCache.set(tag, null);
		return null;
	}

	iconCache.set(tag, iconName);
	return iconName;
};
