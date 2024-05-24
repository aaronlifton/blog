import * as models from "$prisma/zod";
import prisma from "$services/prisma";
import { createClient } from "@libsql/client";
import type { PrismaClientKnownRequestError } from "@prisma/client/runtime/library";

export const client = createClient({
  url: import.meta.env.TURSO_DB_URL,
  authToken: import.meta.env.TURSO_DB_AUTH_TOKEN,
});

export const getViewsBySlug = async (slug: string, shouldIncrement = false) => {
  if (import.meta.env.DEV || !slug) {
    console.log("Development mode: localhost detected, returning 0.");
    return 0;
  }

  const upsert = async () =>
    prisma.metric.upsert({
      where: {
        postSlug: slug,
      },
      create: {
        postSlug: slug,
        metricType: "views",
        value: 0,
      },
      update: {
        value: {
          increment: 1,
        },
      },
      select: {
        id: true,
        postSlug: true,
        value: true,
        metricType: true,
      },
    });

  const find = async () =>
    await prisma.metric.findUnique({
      // Since where only contains one field, which is unique, prisma will use a
      // DB upsert, which avoids unique constraint violations and eschews the need for a transaction.
      // See: https://www.prisma.io/docs/orm/reference/prisma-client-reference#database-upserts
      where: {
        postSlug: slug,
        metricType: "views",
      },
      select: {
        id: true,
        postSlug: true,
        metricType: true,
        value: true,
      },
    });

  try {
    let metric: Zod.infer<typeof models.MetricModel> | null;
    if (shouldIncrement) {
      metric = await upsert();
    } else {
      metric = await find();
    }
    return metric?.value || 0;
  } catch (e) {
    if ((e as PrismaClientKnownRequestError).code === "P2002") {
      // https://www.prisma.io/docs/concepts/components/prisma-client/handling-errors
      // A unique constraint was violated
      // This means that a unique constraint was violated and the transaction was rolled back
      console.error("Unique constraint violation", e);
      return 0;
    }
    console.error(e);
    return 0;
  }
};

export const getViews = async () => {
  // return a hash of views by slug
  if (import.meta.env.DEV) {
    console.log(
      "getViews: Development mode: returning results from memory instead of using Turso API.",
    );
    return {};
  }
  try {
    const results = await prisma.metric.findMany({
      where: {
        metricType: "views",
      },
      select: {
        postSlug: true,
        value: true,
      },
    });
    const views: { [key: string]: bigint } = {};
    for (const result of results) {
      views[result.postSlug] = result.value;
    }
    return views;
  } catch (e) {
    console.error(e);
    return {};
  }
};

export const saveError = async (evt: Zod.infer<typeof models.ErrorModel>) => {
  if (!evt) {
    return;
  }
  try {
    const errorObj = {
      message: evt.message,
      stackTrace: evt.stackTrace,
    };
    const validatedError = models.ErrorModel.parse(errorObj);
    return prisma.error.create({ data: validatedError });
  } catch (e) {
    console.error(e);
  }
};

export const getErrors = async () => {
  try {
    return await prisma.error.findMany();
  } catch (e) {
    console.error(e);
    return [];
  }
};
