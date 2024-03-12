import { readdirSync, mkdirSync, existsSync } from "node:fs";
import sharp from "sharp";
import path from "node:path";
import { fileURLToPath } from "node:url";

const size = {
	width: 250,
	height: 100,
};
const processImages = () => {
	const __filename = fileURLToPath(import.meta.url);
	const __dirname = path.dirname(__filename);

	const srcDir = path.resolve(__dirname, "../");
	const directoryPath = path.join(srcDir, "src/content/blog/assets");
	const relativeOutputDirectory = "src/content/blog/assets/og-images";
	const outputDirectory = path.join(srcDir, relativeOutputDirectory);
	const dirExists = existsSync(relativeOutputDirectory);
	if (!dirExists) {
		mkdirSync(`./${relativeOutputDirectory}`);
	}
	console.log(`Output directory: ${outputDirectory}`);
	readdirSync(directoryPath, (err, files) => {
		if (err) {
			return console.log(`Unable to scan directory: ${err}`);
		}

		for (const file of files) {
			if (path.extname(file) === ".jpg" || path.extname(file) === ".png") {
				sharp(`${directoryPath}/${file}`)
					.resize(size.width, size.height, {
						fit: "cover",
						position: "center",
					})
					.toFile(`${outputDirectory}/${file}`, (err, _info) => {
						if (err) {
							console.log(err);
						} else {
							console.log(`Image ${file} ->\t ${size.width}x${size.height}.`);
						}
					});
			}
		}
	});
};

export default {
	name: "custom-image-resizer-integration",
	hooks: {
		"astro:config:setup": () => {
			processImages();
		},
	},
};
