import { ImageResponse } from "@vercel/og";
import { type CollectionEntry, getCollection } from "astro:content";
import fs from "node:fs";
import path from "path";

interface Props {
  params: { slug: string };
  props: { post: CollectionEntry<"blog"> };
}

export const prerender = true;

export const size = {
  width: 350,
  height: 200,
};
const twString = `w-[${size.width}px] h-[${size.height}px] flex rounded-3xl`;

export async function GET({ props }: Props) {
  const { post } = props;

  if (post.data.draft === true || !post.data.cover) {
    return new Response(null, { status: 404, statusText: "Not found" });
  }

  // using custom font files
  const DmSansBold = fs.readFileSync(
    path.resolve("public/fonts/dm-sans-latin-600-normal.ttf"),
  );
  const DmSansReqular = fs.readFileSync(
    path.resolve("public/fonts/dm-sans-latin-400-normal.ttf"),
  );

  const postCover = fs.readFileSync(
    process.env.NODE_ENV === "development"
      ? path.resolve(
        post.data.cover.src.replace(/\?.*/, "").replace("/@fs", ""),
      )
      : path.resolve(post.data.cover.src.replace("/", "dist/server/")),
  );

  // const __dirname = path.dirname(fileURLToPath(import.meta.url));
  // console.log({ src: post.data.cover.src, dirname: __dirname });
  // const downsizedPostCover = await getImage({
  // 	// @ts-ignore
  // 	src: postCover.buffer,
  // 	width: 200,
  // 	height: 200,
  // 	format: "webp",
  // });

  // const cover = downsizedPostCover; //post.data.cover
  // // post cover with Image is pretty tricky for dev and build phase
  // const postCoverBuffer = fs.readFileSync(
  // 	process.env.NODE_ENV === "development"
  // 		? path.resolve(cover.src.replace(/\?.*/, "").replace("/@fs", ""))
  // 		: path.resolve(cover.src.replace("/", "dist/server/")),
  // );

  // Astro doesn't support tsx endpoints so usign React-element objects
  const html = {
    type: "div",
    props: {
      children: [
        {
          type: "div",
          props: {
            // using tailwind
            // 250 x 100
            tw: twString,
            children: [
              {
                type: "img",
                props: {
                  src: postCover.buffer,
                },
              },
            ],
          },
        },
        {
          type: "div",
          props: {
            tw: "pl-10 shrink flex",
            children: [
              {
                type: "div",
                props: {
                  style: {
                    fontSize: "48px",
                    fontFamily: "DM Sans Bold",
                  },
                  children: post.data.title,
                },
              },
            ],
          },
        },
        {
          type: "div",
          props: {
            tw: "absolute right-[40px] bottom-[40px] flex items-center",
            children: [
              {
                type: "div",
                props: {
                  tw: "text-blue-600 text-3xl",
                  style: {
                    fontFamily: "DM Sans Bold",
                  },
                  children: "Aaron Lifton",
                },
              },
              {
                type: "div",
                props: {
                  tw: "px-2 text-3xl",
                  style: {
                    fontSize: "30px",
                  },
                  children: "|",
                },
              },
              {
                type: "div",
                props: {
                  tw: "text-3xl",
                  children: "Blog",
                },
              },
            ],
          },
        },
      ],
      tw: "w-full h-full flex items-center justify-center relative px-22",
      style: {
        background: "#f7f8e8",
        fontFamily: "DM Sans Regular",
      },
    },
  };

  // @ts-ignore
  return new ImageResponse(html, {
    width: 1200,
    height: 600,
    fonts: [
      {
        name: "DM Sans Bold",
        data: DmSansBold.buffer,
        style: "normal",
      },
      {
        name: "DM Sans Regular",
        data: DmSansReqular.buffer,
        style: "normal",
      },
    ],
  });
}

// to generate an image for each blog posts in a collection
export async function getStaticPaths() {
  const blogPosts = await getCollection("blog");
  return blogPosts
    .filter((post) => post.data.draft !== true)
    .map((post) => ({
      params: { slug: post.slug },
      props: { post },
    }));
}
