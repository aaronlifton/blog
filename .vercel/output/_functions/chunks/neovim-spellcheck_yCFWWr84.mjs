const id = "neovim-spellcheck.mdx";
						const collection = "blog";
						const slug = "neovim-spellcheck";
						const body = "\nimport { Image } from \"astro:assets\"\nimport ZoomImage from \"../../components/ZoomImage.svelte\"\nimport image1 from \"./assets/screenshots/neovim-spellfile.png\";\n\nIn neovim, when a word is marked as misspelled, you can add it to the dictionary\nby typing <kbd>zg</kbd> while the cursor is on the word. To correct a word from a list of\nsuggestions, you can type <kbd>z=</kbd>. This is great, but what if you want to add a\ncustom spelling suggestion? For example, I want to add the word `neovim` to the\ndictionary, but I don't want to add it to the dictionary as `neovim`, I want to\nadd it as `Neovim`, with a capital `N`.\n\n## Configuration\nHere's how you do it:\n\n1. Create a custom spelling suggestion file in your neovim configuration\n   directory. I called mine `~/.config/nvim/spell/sugg`. You might notice files\n   in that folder that end in `.add` — the words in these files are\n   ignored by spellcheck.\n\n   ```js annotate\n   neovim/Neovim\n   //------<<\n   ```\n\n   If `Neovim` is marked as a misspelled word, type <kbd>zg</kbd> to add it to the\n   dictionary.\n   \\\n   **Note**: If the word to the right of the `/` is mispelled, the suggestion\n   will be ignored by neovim. Make sure all words on the right are added as\n   \"goodwords\".\n\n   The file should now look like this:\n   <ZoomImage link={image1.src} alt={\"Full-size neovim screenshot\"} caption=\"Neovim screenshot showing a custom spelling suggestion file\" client:load>\n     <Image src={image1} width=\"720\"\n       alt=\"Neovim screenshot showing a custom spelling suggestion file\"\n      class=\"max-h-full max-w-full m-0\"\n      />\n   </ZoomImage>\n\n1. Add the following to your vim options:\n\n```lua\nvim.opt.sps = \"file:/Users/aaron/.config/nvim/spell/sugg,best\"\n```\n\nNow, when editing a file, if `neovim` is marked as a misspelled word, typing\n<kbd>z=</kbd> will show `Neovim` as the first suggestion.\n\n## Disabling for syntax\nAnother thing to note is that there is a configuration option for spellchecking\nsyntax. Generally, we do not want to spell check function and class names, etc -\nthe whole page would start to turn red! To ignore certain syntax, add the\nfollowing to your vim options:\n\n```lua\nvim.cmd(\"set spell syntax=off\")\n```\n\n";
						const data = {title:"Neovim spellcheck - quick tips",description:"How to fix those pesky spelling mistakes in Neovim, and add custom spelling suggestions.",pubDate:new Date(1706590800000),cover:
						new Proxy({"src":"/_astro/neovim-spellfile.3R3kuJCs.png","width":3920,"height":1660,"format":"png","fsPath":"/Users/aaron/Code/astro/fullstack-dev-blog/src/content/blog/assets/screenshots/neovim-spellfile.png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/aaron/Code/astro/fullstack-dev-blog/src/content/blog/assets/screenshots/neovim-spellfile.png";
							}
							
							return target[name];
						}
					})
					,coverAlt:"Neovim spellcheck",tags:["neovim","quick tips"]};
						const _internal = {
							type: 'content',
							filePath: "/Users/aaron/Code/astro/fullstack-dev-blog/src/content/blog/neovim-spellcheck.mdx",
							rawData: undefined,
						};

export { _internal, body, collection, data, id, slug };
