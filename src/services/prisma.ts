import { PrismaClient } from "@prisma/client";
import { PrismaLibSQL } from "@prisma/adapter-libsql";
import { createClient } from "@libsql/client";
import { client as libsqlClient } from "$services/turso.ts"

export { BlogPostMetaModel } from "$prisma/zod/blogpostmeta";
export { ErrorModel } from "$prisma/zod/error";


const adapter = new PrismaLibSQL(libsqlClient);
export const prisma = new PrismaClient({ adapter });

export default prisma;
