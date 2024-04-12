import { createClient } from "@libsql/client";
import { PrismaLibSQL } from "@prisma/adapter-libsql";
import { PrismaClient } from "@prisma/client";

export { ErrorModel } from "$prisma/zod/error";
export { MetricModel } from "$prisma/zod/metric";

const client = createClient({
  url: import.meta.env.TURSO_DB_URL,
  authToken: import.meta.env.TURSO_DB_AUTH_TOKEN,
});
const adapter = new PrismaLibSQL(client);
export const prisma = new PrismaClient({ adapter });

export default prisma;
