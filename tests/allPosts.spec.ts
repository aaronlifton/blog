import { test, expect } from '@playwright/test';
// import { getCollection } from "astro:content";

// const posts = (await getCollection("blog"))
//   .filter((post) => !post.data.draft)
//   .sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());
//
// const postPaths = posts.map(post => `/posts/${post.slug}`)
// test('has title', async ({ page }) => {
//   console.log({postPaths})
//   for (const path of postPaths) {
//     // await page.goto(path);
//     const responseP = await page.waitForResponse(path);
//     expect(responseP.status()).toBe(200);
//     await expect(page.getByRole('heading', {
//       name: posts.find(post => path.endsWith(post.slug))?.data?.title
//     }))
//     await expect(page).toHaveTitle(/${post.title}/);
//   }})
//
test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});
