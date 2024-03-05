import { test, expect } from "@playwright/test";

test.describe("Posts", () => {
	for (const path of ["/posts", "/tags/git"]) {
		test(`blog post should have correct link (${path})`, async ({ page }) => {
			await page.goto(path);

			await expect(
				page.getByRole("link", {
					name: "Ruby now produces machine code on-the-fly",
				}),
			).toHaveAttribute(
				"href",
				"/blog/ruby-now-produces-machine-code-on-the-fly",
			);
		});
	}

	// test.describe('View source code on GitHub link', () => {
	//   test('english blog post should have a link to view source on GitHub', async ({
	//     page,
	//   }) => {
	//     await page.goto('/posts/demystifying-git-rebase')
	//     await expect(
	//       page.getByText('Why learn git rebase?').first()
	//     ).toBeVisible()
	//
	//     await page.getByRole('link', { name: /view source code/i }).click()
	//     await expect(page).toHaveURL(
	//       `https://github.com/phelipetls/blog/blob/master/src/content/posts/demystifying-git-rebase/index.mdx`
	//     )
	//     await expect(page.getByText('Why learn `git rebase`?')).toBeVisible()
	//   })
	// })
});
