interface PostResponse {
	title: string;
	description: string;
	pubDate: string;
}
type PostElMatches = Array<{
	this: HTMLElementTagNameMap;
	index: number;
	element: HTMLElementTagNameMap;
}>;

describe("blog", () => {
	let allPosts: PostResponse[] = null;
	const postUrls: string[] = [];

	before(() => {
		cy.request("api/blog/test/posts")
			.its("body")
			.then((body) => JSON.parse(body).posts)
			.as("posts");
		cy.get("@posts").then(($posts) => {
			allPosts = ($posts as unknown as PostResponse[])
				.sort((a, b) => {
					return new Date(b.pubDate).valueOf() - new Date(a.pubDate).valueOf();
				})
				.map((post) => ({
					...post,
					title: post.title.replaceAll("`", ""),
					description: post.description.replaceAll("`", ""),
				}));
		});
	});

	it("lists all posts with valid links", () => {
		const page = cy.visit("/");
		page.get("title").should("have.text", "Aaron's Dev Blog");
		cy.get("main").get("article").contains("developer blog");
		cy.wait(500);
		cy.get(".post-preview__heading").should("have.text", "Recent posts");
		cy.get(".post-preview").should("have.length", 8).as("posts");
		const idx = 0;
		cy.get("@posts")
			.first()
			.then(($post) => {
				const title = cy.wrap($post).find(".post-preview__title");
				title.find(">a").as("link");
				cy.get("@link")
					.invoke("text")
					.then((text) => {
						return text.replace(/u00a0/g, " ").replace("`", "");
					});
				let textVal = "";
				cy.get("@link")
					.should(($a) => {
						textVal = $a.get(0).innerText;
						postUrls.push(($a.get(0) as HTMLAnchorElement).href);
						expect($a.get(0).innerText).to.eq(allPosts[idx].title);
					})
					.as("link2");
			});
	});

	it("titles are correct", () => {
		const page = cy.visit("/");
		page.get("title").should("have.text", "Aaron's Dev Blog");
		cy.get("main").get("article").contains("developer blog");
		cy.get(".post-preview__heading").should("have.text", "Recent posts");
		cy.get(".post-preview")
			.should("have.length", 8)
			.then((posts) => {
				posts.slice(1).each((idx: number, $post: HTMLElement) => {
					if (!posts[idx]) {
						console.error(
							"Failed to fetch post data before running tests. Check CI logs to ensure the server can be reached",
						);
					}
					const title = cy.wrap($post).find(".post-preview__title");
					title.find(">a").as("link");
					cy.get("@link")
						.invoke("text")
						.then((text) => {
							return text.replace(/u00a0/g, " ").replace("`", "");
						});
					let textVal = "";
					cy.get("@link")
						.should(($a) => {
							textVal = $a.get(0).innerText;
							postUrls.push(($a.get(0) as HTMLAnchorElement).href);
							expect($a.get(0).innerText).to.eq(allPosts[idx + 1].title);
						})
						.as("link2");
				});
			})
			.should(() => {
				expect(postUrls.length).to.eq(allPosts.length);
			});
	});

	it("has an accessible dialog element on each post", () => {
		for (let idx = 0; idx < postUrls.length; idx++) {
			const url = postUrls[idx];
			cy.visit(url);
			cy.get(".text-3xl").contains(allPosts[idx].title);
			const ariaLabel = "Open full-size image";
			cy.get(`button[aria-label="${ariaLabel}"]`).as(`btn-${idx}`);
			cy.get(`@btn-${idx}`).children().find("img").first().as(`img-${idx}`);
			cy.wait(100);
			cy.get("button img").first().as("img");
			let w = 0;
			let h = 0;
			let middle = { x: 0, y: 0 };
			cy.get("@img")
				.then(($img) => {
					const i = Cypress.$($img);
					const rect = i[0].getBoundingClientRect();
					w = rect.width;
					h = rect.height;
					middle = { x: w / 2, y: h / 2 };
				})
				.then(() => {
					cy.wait(200);
					cy.get("button img")
						.first()
						.click(middle.x, middle.y, { force: true });
					cy.get("dialog", { timeout: 7000 }).then(($d) => {
						const open = Cypress.$($d).attr("open");
						if (open !== "open") {
							// cy.get('figcaption').first().click()
							cy.wait(100);
							// cy.reload();
							// cy.wait(200);
							// cy.get("button").first().focus();
							// cy.get("button img")
							// 	.first()
							// 	.click(middle.x, middle.y, { force: true });
							cy.get("button img").click({ force: true });
						} else {
							cy.wrap($d).should("be.visible").and("have.attr", "open", "open");
						}
					});
					cy.wait(100);
					cy.get("dialog button")
						.first()
						.should(($btn) => expect($btn).attr("aria-label").to.equal("Close"))
						.click();
					cy.wait(100);
					cy.get("dialog")
						.should("not.be.visible")
						.and("not.have.attr", "open");
				});
			cy.wait(200);
		}
	});
});
