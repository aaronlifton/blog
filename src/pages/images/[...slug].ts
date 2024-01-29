import type { APIRoute } from "astro";
import fs from "fs/promises";
import path from "path";

export async function getStaticPaths() {
  const files: string[] = await fs.readdir("public/screenshots/");

  return files.map((fileName) => {
    return {
      params: {
        slug: fileName,
      },
    };
  });
}

export const GET: APIRoute = async ({ props, params }) => {
  console.log({ props, params });
  // Define the path to your image file
  const imagePath = path.join(
    process.cwd(),
    "/public/screenshots/nvim-no-unused-vars.png",
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
