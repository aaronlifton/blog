const id = "eslint-allow-underscore-prefix.mdx";
						const collection = "blog";
						const slug = "eslint-allow-underscore-prefix";
						const body = "\nimport { Code } from \"astro:components\";\nimport { Image } from \"astro:assets\"\nimport ZoomImage from \"../../components/ZoomImage.svelte\"\nimport image1 from \"./assets/screenshots/nvim-no-unused-vars2.png\";\n\nEver encounter this error?\n```sh\n\"eslint: '\\_myVar' is assigned a value but never used\"\n```\nIdeally the `@typescript-eslint/no-unused-vars` rule can be left enabled\nand specific variables can be ignored when prefixed with an underscore `_`. You\ncan do exactly this in a few simple steps.\n\n## The Steps\n\nFirst, update your `.eslintrc.json` as follows:\n\n```json\n{\n  \"eslintConfig\": {\n    \"rules\": {\n      \"no-unused-vars\": \"off\",\n      \"@typescript-eslint/no-unused-vars\": [\n        \"warn\",\n        {\n          \"argsIgnorePattern\": \"^_\",\n          \"varsIgnorePattern\": \"^_\",\n          \"caughtErrorsIgnorePattern\": \"^_\"\n        }\n      ]\n    }\n  }\n}\n```\n\nThis allows you to prefix any variable with `_` to be ignored by `ESLint`,\nincluding those in destructuring assignments.\n\nAfter updating the `.eslintrc.json` as follows, I could then prefix any\n  variable with an underscore to have it be ignored by `ESLint`:\n\n```js annotate\nconst [_isZoomVisible, setZoomVisible] = useState(false);\n//      ^\n//     [added underscore to variable name.]\n```\n\nAfter updating the `eslintConfig`, the error is now gone and ESLint doesn't\ncomplain about the unused variables.\n";
						const data = {title:"ESLint - Ignore underscore-prefixed variables for `eslint-disable-unused-vars` rule",description:"Keep using `eslint-disable-unused-vars` by setting up a rule to ignore underscore-prefixed variables.",pubDate:new Date(1705294800000),cover:
						new Proxy({"src":"/_astro/nvim-no-unused-vars.EL6ZAPAb.png","width":5120,"height":2880,"format":"png","fsPath":"/Users/aaron/Code/astro/fullstack-dev-blog/src/content/blog/assets/screenshots/nvim-no-unused-vars.png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/aaron/Code/astro/fullstack-dev-blog/src/content/blog/assets/screenshots/nvim-no-unused-vars.png";
							}
							
							return target[name];
						}
					})
					,coverAlt:"Neovim screenshot showing eslint unused vars error",tags:["eslint","react","typescript","javascript"]};
						const _internal = {
							type: 'content',
							filePath: "/Users/aaron/Code/astro/fullstack-dev-blog/src/content/blog/eslint-allow-underscore-prefix.mdx",
							rawData: undefined,
						};

export { _internal, body, collection, data, id, slug };
