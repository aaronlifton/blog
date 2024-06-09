import { db, Metric } from "astro:db";

// https://astro.build/db/seed
export default async function seed() {
  await db.insert(Metric).values([
    {
      metricType: "pageview",
      postSlug: "neovim-git-commit-review-gemini-gpt4o",
      value: 1,
    },
    {
      metricType: "pageview",
      postSlug: "neovim-git-commit-review-gemini-gpt4o",
      value: 3,
    },
  ]);
}
