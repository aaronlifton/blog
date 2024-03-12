import type { APIRoute } from "astro";
import fs from "fs/promises";
import path from "node:path";

export const prerender = true;
export async function getStaticPaths() {
	const files: string[] = await fs.readdir("src/content/blog/assets/");

	return files.map((fileName) => {
		return {
			params: {
				slug: fileName,
			},
		};
	});
}

export const GET: APIRoute = async ({ props, params }) => {
	// Define the path to your image file
	const imagePath = path.join(
		process.cwd(),
		"/src/content/blog/assets/screenshots/nvim-no-unused-vars.png",
	);

	// Read the image file
	const imageBuffer = await fs.readFile(imagePath);

	// Return the image as a response
	return new Response(imageBuffer, {
		headers: {
			"Content-Type": "image/png",
		},
	});
};
