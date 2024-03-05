const id = "shaku-post.mdx";
						const collection = "blog";
						const slug = "shaku-post";
						const body = "\n```js annotate\n\nconst blog = \"https://jser.dev\"\n//                    ^\n//       [JSer.dev is the **homepage** for JSer.]\n//       [Check it out! [jser.dev](https://jser.dev)]\n\nconst blog = \"https://jser.dev\"\n//                    ~~~~~~~~\n//       [JSer.dev is the homepage for JSer.]\n//       [Check it out!]\n\nconst blog = \"jser.dev\"\n//            --------\n//          [Check it out!]\n\nconst blog = \"jser.dev\"\n//            ........\n//          [Check it out!]\n\n\nconst blog = \"jser.dev\"\n//            ........\n\nconst blog = \"jser.dev\"\n//            --------\nconst blog = \"jser.dev\"\n//            ~~~~~~~~\n\n// @highlight\nfunction useSomeEffect({blog}) {\n//       ~~~~~~~~~~~~~\n  useEffect(() => {\n    // do some stuff\n\n// @highlight start\n      return () => {\n        location.href = 'https://jser.dev'\n      }\n//    ^\n// [This cleanup function is super important]\n// @highlight end\n\n    }, [blog])\n}\n\n// @dim\nfunction foo() {\n  console.log(\"Hello!\")\n// @dim start\n  setTimeout(() => {\n    console.log(\"World!\")\n  },1000)\n// @dim end\n\n// @focus\nfunction foo(){\n  console.log(\"Hello!\")\n// @focus start\n  setTimeout(() => {\n    console.log('World!')\n  },1000)\n// @focus end\n\n}\n\n```\n\\\nJSX is supported as well, remember to use `{}`\n\n```jsx annotate\nfunction Component() {\n  return (\n    <p>\n      {/*   ^   */}\n      {/*[Hello JSX!]*/}\n    </p>\n  );\n}\n```\n";
						const data = {title:"JS annotate",description:"Lorem ipsum dolor sit amet",pubDate:new Date(1702962000000),cover:
						new Proxy({"src":"/_astro/blog-placeholder-1.-HfCevok.jpg","width":300,"height":300,"format":"jpg","fsPath":"/Users/aaron/Code/astro/fullstack-dev-blog/src/content/blog/assets/blog-placeholder-1.jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/aaron/Code/astro/fullstack-dev-blog/src/content/blog/assets/blog-placeholder-1.jpg";
							}
							
							return target[name];
						}
					})
					,coverAlt:"Second post",tags:["second","post"],draft:true};
						const _internal = {
							type: 'content',
							filePath: "/Users/aaron/Code/astro/fullstack-dev-blog/src/content/blog/shaku-post.mdx",
							rawData: undefined,
						};

export { _internal, body, collection, data, id, slug };
