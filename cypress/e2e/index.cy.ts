let posts = null;

before(() => {
  cy.request("api/blog/test/posts")
    .its("body")
    .then((body) => JSON.parse(body).posts)
    .as("posts");
  posts = cy.get("@posts");
  // cy.origin("localhost", async (origin) => {
  //   const config = Cypress.require("../../src/content/config.ts")
  //   console.log(config)
  // })
});

it("titles are correct", () => {
  const page = cy.visit("/");
  page.get("title").should("have.text", "Aaron's Dev Blog");
  cy.get("main")
    .get("article")
    .should((article) => {
      expect(article).to.contain("developer blog");
    });
  cy.wait(500);
  cy.get(".post-preview__heading").should("have.text", "Recent posts");
  cy.get(".post-preview")
    .should("have.length", 8)
    .then((posts) => {
      posts.each((i, post) => {
        const p = cy.wrap(post);
        p.scrollIntoView();
        p.find(".post-preview__title").should("contain.text", posts[i].title);
      });
    });
  // cy.get(".post-prevew").should(post => {
  //   post.scrollIntoView()
  //   expect(post).get("h2").should("have.text", "Ruby now produces machine code on-the-fly")
  // })
});

// it('renders a blog post', () => {
//   const page = cy.visit('http://localhost:4321/blog/ruby-now-produces-machine-code-on-the-fly')
//   cy.wait(2000)
//   page.get('h1').first().should('have.text', 'Ruby now produces machine code on-the-fly')
//
//   const tags = cy.get(".tags").children()
//   console.log({tags})
// })
