import { db, Metric } from "astro:db";

// https://astro.build/db/seed
export default async function seed() {
  await db.insert(Metric).values([
    {
      metricType: "pageview",
      value: 3,
      postSlug: "neovim-git-commit-review-gemini-gpt4o",
    },
    {
      metricType: "pageview",
      value: 1,
      postSlug: "neovim-git-commit-review-gemini-gpt4o",
    },
  ]);
}
