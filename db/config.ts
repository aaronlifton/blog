import { defineDb } from "astro:db";

import { column, defineTable, NOW } from "astro:db";

export const Metric = defineTable({
  columns: {
    id: column.number({ primaryKey: true }),
    metricType: column.text(),
    postSlug: column.text(),
    value: column.number(),
    date: column.date({ default: NOW }),
  },
  indexes: [
    { on: ["postSlug", "metricType"], unique: false },
  ],
});
export const ErrorTable = defineTable({
  columns: {
    id: column.number({ primaryKey: true }),
    message: column.text(),
    stackTrace: column.json({ optional: true }),
    date: column.date({ default: NOW }),
  },
  indexes: [
    { on: ["message"], unique: false },
  ],
});
// Comment: defineTable({
//   columns: {
//     id: column.number({ primaryKey: true }),
//     author: column.text(),
//     content: column.text({ optional: true }),
//     published: column.date({ default: NOW }),
//   },
// });

// https://astro.build/db/config
export default defineDb({
  tables: { Metric, ErrorTable },
});
