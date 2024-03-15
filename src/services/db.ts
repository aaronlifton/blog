import { PrismaClient } from "@prisma/client";
import { PrismaLibSQL } from "@prisma/adapter-libsql";
import { createClient } from "@libsql/client";

export { BlogPostMetaModel } from "$prisma/zod/blogpostmeta";
export { ErrorModel } from "$prisma/zod/error";

export const libsql = createClient({
  // url: `${process.env.TURSO_DATABASE_URL}`,
  // authToken: `${process.env.TURSO_AUTH_TOKEN}`,
  url: import.meta.env.TURSO_DB_URL,
  authToken: import.meta.env.TURSO_DB_AUTH_TOKEN,
});

const adapter = new PrismaLibSQL(libsql);
export const prisma = new PrismaClient({ adapter });

export default prisma;
