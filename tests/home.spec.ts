import { test, expect } from "@playwright/test";
import { baseUrl } from "./util";

test.describe("Posts", () => {
  test("should have a list of blog posts", async ({ page }) => {
    await page.goto(baseUrl);
    expect(page).toHaveTitle("Aaron's Dev Blog");
    await expect(page.getByTitle("Ruby now produces machine")).toHaveAttribute(
      "href",
      "/blog/ruby-now-produces-machine-code-on-the-fly",
    );
    await expect(
      page.getByTitle("Wezterm workspace switcher API"),
    ).toHaveAttribute("href", "/blog/wezterm-configuration-tricks");
    // Image links
    await expect(
      page.getByRole("link", {
        name: 'Go to the post titled "Wezterm workspace switcher API"',
      }),
    ).toHaveAttribute("href", "/blog/wezterm-configuration-tricks");
    await expect(
      page
        .getByRole("link", {
          name: 'Go to the post titled "Neovim macros vs normal mode"',
          exact: true,
        })
        .first(),
    ).toHaveAttribute("href", "/blog/neovim-macros-vs-registers");
  });

  test("should have the latest code carousel", async ({ page }) => {
    await page.goto(baseUrl);
    expect(
      page
        .getByRole("heading", {
          name: "Latest Code",
        })
        .first(),
    ).toBeDefined();
    const firstCodeContainer = page.locator(".code").first();
    expect(await firstCodeContainer.getByRole("heading")).toContainText("vim");
    expect(
      await firstCodeContainer.getByRole("link").first().getAttribute("href"),
    ).toMatch(/\/blog\/((\w+)-)+(\w+)/);

    const outOfViewCode = await page.locator(".code:nth-child(4)").first();
    const latestCodeContainer = await firstCodeContainer.locator("xpath=..");
    const el = await firstCodeContainer.elementHandle();
    const boundingBox = await el?.boundingBox();
    const containerWidth = boundingBox?.width;
    expect(containerWidth).toBeDefined();
    const firstCodeContainerBox = await firstCodeContainer.boundingBox();
    expect(firstCodeContainerBox).toBeDefined();
    // Move mouse in between codes
    if (firstCodeContainerBox && containerWidth !== undefined) {
      await outOfViewCode.hover();
      await page.mouse.wheel(-1 * containerWidth, 0);
      await expect(outOfViewCode).toBeInViewport();
    }
  });
});

test.describe("nav", () => {
  test("all links work", async ({ page }) => {
    await page.goto(baseUrl);
    await expect(page.getByRole("link", { name: "Home" })).toHaveAttribute(
      "href",
      "/",
    );
    await expect(
      page.getByRole("link", { name: "Blog", exact: true }),
    ).toHaveAttribute("href", "/blog/1");
    await expect(page.getByRole("link", { name: "Tags" })).toHaveAttribute(
      "href",
      "/tags",
    );
    await expect(page.getByRole("link", { name: "About" })).toHaveAttribute(
      "href",
      "/about",
    );
    await expect(
      page.getByRole("navigation").getByRole("link", {
        name: "Are you a recruiter? Connect",
      }),
    ).toHaveAttribute("href", "https://linkedin.com/in/aaronlifton");
    await expect(
      page.getByRole("link", { name: "Go to Aaron's GitHub repo" }),
    ).toHaveAttribute("href", "https://github.com/aaronlifton");
  });
});
