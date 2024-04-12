import { client as libsqlClient } from "$services/turso.ts";
import { createClient } from "@libsql/client";
import { PrismaLibSQL } from "@prisma/adapter-libsql";
import { PrismaClient } from "@prisma/client";

export { ErrorModel } from "$prisma/zod/error";
export { MetricModel } from "$prisma/zod/metric";

const adapter = new PrismaLibSQL(libsqlClient);
export const prisma = new PrismaClient({ adapter });

export default prisma;
