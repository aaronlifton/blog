import { getCollection, type CollectionEntry } from "astro:content";
import fs from "fs";
import path from "path";
import { ImageResponse } from "@vercel/og";

interface Props {
	params: { slug: string };
	props: { post: CollectionEntry<"blog"> };
}

export async function GET({ props }: Props) {
	const { post } = props;

	if (post.data.draft === true) {
		Astro.response.status = 404;
		Astro.response.statusText = "Not found";
		return;
	}

	// using custom font files
	const DmSansBold = fs.readFileSync(
		path.resolve("public/fonts/dm-sans-latin-600-normal.ttf"),
	);
	const DmSansReqular = fs.readFileSync(
		path.resolve("public/fonts/dm-sans-latin-400-normal.ttf"),
	);

	// post cover with Image is pretty tricky for dev and build phase
	const postCover = fs.readFileSync(
		process.env.NODE_ENV === "development"
			? path.resolve(
					post.data.cover.src.replace(/\?.*/, "").replace("/@fs", ""),
			  )
			: path.resolve(post.data.cover.src.replace("/", "dist/")),
	);

	// const downsizedPostCover = await getImage({
	// 	// @ts-ignore
	// 	src: postCover,
	// 	width: 200,
	// 	height: 200,
	// });

	// Astro doesn't support tsx endpoints so usign React-element objects
	const html = {
		type: "div",
		props: {
			children: [
				{
					type: "div",
					props: {
						// using tailwind
						tw: "w-[250px] h-[100px] flex rounded-3xl ",
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
	return blogPosts.map((post) => ({
		params: { slug: post.slug },
		props: { post },
	}));
}
