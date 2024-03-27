import { test, expect } from "@playwright/test";
import { baseUrl } from "./util";

test.describe("Tags", () => {
  test("should have a list of blog posts", async ({ page }) => {
    await page.goto(`${baseUrl}/tags`);
    await expect(page).toHaveTitle("Aaron's Dev Blog");
    await expect(page.getByText("page 1")).toBeDefined();
    await expect(
      page.getByRole("link", {
        name: "Ruby now produces machine code on-the-fly",
        exact: true,
      }),
    ).toHaveAttribute(
      "href",
      "/blog/ruby-now-produces-machine-code-on-the-fly",
    );
    await expect(
      page.getByRole("link", { name: 'Go to the post titled "Ruby' }),
    ).toHaveAttribute(
      "href",
      "/blog/ruby-now-produces-machine-code-on-the-fly",
    );
  });
});
