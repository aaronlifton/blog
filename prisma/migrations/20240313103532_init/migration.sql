-- CreateTable
CREATE TABLE "BlogPostMeta" (
    "id" TEXT NOT NULL,
    "postSlug" TEXT NOT NULL PRIMARY KEY,
    "numViews" BIGINT NOT NULL DEFAULT 0
);

-- CreateTable
CREATE TABLE "Error" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "message" TEXT NOT NULL,
    "stackTrace" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
