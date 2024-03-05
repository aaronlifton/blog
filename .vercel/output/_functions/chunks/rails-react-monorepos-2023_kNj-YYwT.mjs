const id = "rails-react-monorepos-2023.md";
						const collection = "blog";
						const slug = "rails-react-monorepos-2023";
						const body = "\n## The uncertain future of rails monorepos in December 2023\n\nRails no longer has a default way to handle becoming a *monorepo* with a\nfrontend. Previously, it came with `webpacker`, and as the Javascript ecosystem\nhas evolved, it makes sense for Rails to decouple itself from the frontend build\nprocess. So, **What build system should you use for a rails-react *monorepo* in\n2023?** My current recommendation is `vite-rails`. `vite` is the way to go\nunless you are working with `bun` or `deno`, which both offer a Vite-like\nexperience for their own runtimes. I also think `jsbundling-rails` with `bun` or\n`esbuild` is a solid choice. Thinking long term, I think `vite` is the best\nchoice, because it is the most popular outside of the Rails ecosystem, and it is\nthe most likely to be supported in the future. It's a solid mainstream choice\nthat is likely to be supported by the Rails community given the relationship\nVite has to Next.js and Vue. Tooling like Vite is essential for adoption of\nfrontend frameworks today: Next.js, Vue.js, VueKit, Svelte, SvelteKit, and Nuxt.js.\n\n## The simplest, most robust way to bundle a React frontend in your Rails *monorepo*, at the end of 2023\n\nSo, what build system should you use for a rails-react *monorepo* in 2023?\n\nMy 2c, is that you should create a separate app (Next.js, or any edge-hosted\nSPA), and use rails solely as a backend API. This way, you free yourself of the\nquestionable future of Rails' frontend interoperability, and you avoid having to\never render a page on the server with rails that is sent to the frontend, only\nto have further rendering on the frontend by javascript. For those who are still\nupgrading to the latest Rails, or simply want to feel like they did in 2018,\nShakapacker is available as a drop-in replacement for webpacker.\n\nSo, jsbundling-rails and cssbundling-rails is all you need, safely ignore the\nrest. Took me a few hours to get to this conclusion when upgrading an old Rails\napp.\n\nLinks:\n\n- \\[\\[Vite-rails\\]\\]\n\n### Why Hotwire and turbo is not the best choice today\n\n1. There is not a lot of documentation\n\n1. They don't provide any testing guidelines, the best I've found is hand-wavy\n   test-with-a-browser stuff\n\n1. Everything is essentially global\n\n1. Functions are disconnected from their parameters, i.e. I can't tell which\n   bits of data a function is using without digging through a bunch of code.\n\n1. Putting state in your HTML is tricky if you also want to modify the DOM.\n\n1. Their naming scheme is cumbersome:\n\n   1. e.g. data-controller=\"using-a--sub-directory\"\n   1. data-target=\"some--nested--target-has-a.function\"\n   1. that is, the fact that everything is location-in-your-code-file-structure\n      based. The framework lacking a layer of abstraction that would ;e\n\n1. Turbo streams and data frames are simply not relevant to the current state of\n   the web. I appreciate how other frameworks expand on the concept of the DOM\n   in order to deliver a superior  experience.\n\nAnd a lot of other small things.\n\nSvelte, AstroJS are light-years ahead of Hotwire, and their feature-set is\ncomparable against Rails even - they provide total backend solutions. The Node.js\nlandscape has several \"batteries-included\" frameworks that provide utilities to\ndeal with sessions, cookies, and other things that Rails provides — this\nincludes SvelteKit, Nuxt, Next.js, Nest.js, and Deno Fresh. Node is definitely a great\nreplacement for Rails.\n\nTurbo can be summarized as, being the right choice, if: your favorite company is\nBasecamp and you want to struggle to implement concepts that are actually easily\nimplement in React.\n\nCompared to other modern frameworks, Stimulus involves writing what some may\nconsider to be *hacky* code — that is, code that is not easily\nunderstandable or written in a way that is not easily maintainable. The various\ndata attributes here do not provide a clear way to understand what is happening,\nand the word target seems totally unnecessary given frameworks parse abstract\nsyntax trees behind the scenes in order to prove developers much more ergonomic\nways of doing things nowadays.\n\n```html\n<div data-controller=\"hello\">\n  <input data-hello-target=\"name\" type=\"text\">\n\n  <button data-action=\"click->hello#greet\">Greet</button>\n\n  <span data-hello-target=\"output\"></span>\n</div>\n```\n\n```js\n// hello_controller.js\nimport { Controller } from \"@hotwired/stimulus\"\n\nexport default class extends Controller {\n  static targets = [ \"name\", \"output\" ]\n\n  greet() {\n    this.outputTarget.textContent =\n      `Hello, ${this.nameTarget.value}!`\n  }\n}\n```\n\nIt brings back some of the component lifecycle events from older versions of\nreact, and requires you to sprinkle the words \"target\" over your HTML, which is\nactually difficult to parse. Instead of looking for certain data attributes or\nvalues, Stimulus looks for suffixes of words - this is cumbersome and pointless\nwith the current features of Common JS and ESModules.\n";
						const data = {title:"The state of rails monorepos in December 2023",description:"Hotwire is a framework for Rails developers who still refuse to use a modern framework in 2024.",pubDate:new Date(1702962000000),cover:
						new Proxy({"src":"/_astro/hotwire._LPxur_h.png","width":3710,"height":2088,"format":"png","fsPath":"/Users/aaron/Code/astro/fullstack-dev-blog/src/content/blog/assets/hotwire.png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/aaron/Code/astro/fullstack-dev-blog/src/content/blog/assets/hotwire.png";
							}
							
							return target[name];
						}
					})
					,coverAlt:"Ruby on Rails and Hotwire",tags:["rails","hotwire","monorepo"]};
						const _internal = {
							type: 'content',
							filePath: "/Users/aaron/Code/astro/fullstack-dev-blog/src/content/blog/rails-react-monorepos-2023.md",
							rawData: undefined,
						};

export { _internal, body, collection, data, id, slug };
