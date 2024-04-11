/*
  Warnings:

  - You are about to drop the column `numViews` on the `Metric` table. All the data in the column will be lost.
  - Added the required column `metricType` to the `Metric` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Metric" (
    "id" TEXT NOT NULL,
    "postSlug" TEXT NOT NULL PRIMARY KEY,
    "value" BIGINT NOT NULL DEFAULT 0,
    "metricType" TEXT NOT NULL
);
INSERT INTO "new_Metric" ("id", "postSlug") SELECT "id", "postSlug" FROM "Metric";
DROP TABLE "Metric";
ALTER TABLE "new_Metric" RENAME TO "Metric";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
