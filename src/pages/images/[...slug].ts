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
  let imagePath;
  let imageBuffer;
  if (params.slug !== undefined) {
    imagePath = path.join(process.cwd(), params.slug);
    imageBuffer = await fs.readFile(imagePath);
  }

  if (imageBuffer) {
    // Return the image as a response
    return new Response(imageBuffer, {
      headers: {
        "Content-Type": "image/png",
      },
    });
  } else {
    return new Response(null, {
      status: 404,
      statusText: "Image not found",
    });
  }
};
