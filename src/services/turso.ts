import { createClient } from "@libsql/client";
import os from "node:os";
import prisma from "./db";
import type { PrismaClientKnownRequestError } from "@prisma/client/runtime/library";
import { ErrorModel } from "$prisma/zod/error";

console.log("meta", import.meta.env.TURSO_DB_URL);
export const client = createClient({
  url: import.meta.env.TURSO_DB_URL,
  authToken: import.meta.env.TURSO_DB_AUTH_TOKEN,
});

const isLocalhost = import.meta.env.mode == "development";
export const getViewsBySlug = async (slug: string, shouldIncrement = false) => {
  if (isLocalhost || !slug) {
    console.log("isLocalhost");
    return 0;
  }

  const initialViewCount = 0;
  const upsert = async () =>
    prisma.blogPostMeta.upsert({
      where: {
        postSlug: slug,
      },
      create: {
        postSlug: slug,
        numViews: initialViewCount,
      },
      update: {
        numViews: {
          increment: 1,
        },
      },
      select: {
        postSlug: true,
        numViews: true,
      },
    });

  const find = async () =>
    await prisma.blogPostMeta.findUnique({
      // Since where only contains one field, which is unique, prisma will use a
      // DB upsert, which avoids unique constraint violations
      // and eschews the need for a transaction.
      // See: https://www.prisma.io/docs/orm/reference/prisma-client-reference#database-upserts
      where: {
        postSlug: slug,
      },
      select: {
        postSlug: true,
        numViews: true,
      },
    });

  try {
    let blogPostMeta;
    if (shouldIncrement) {
      blogPostMeta = await upsert();
    } else {
      blogPostMeta = await find();
      if (!blogPostMeta) {
        blogPostMeta = await upsert();
      }
    }
    return blogPostMeta.numViews;
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
  if (isLocalhost) {
    console.log(
      "getViews: localhost detected, saving resulting in memory instead of using Turso API.",
    );
    return {};
  }
  try {
    const results = await prisma.blogPostMeta.findMany({
      select: {
        postSlug: true,
        numViews: true,
      },
    });
    const views: { [key: string]: bigint } = {};
    for (const result of results) {
      views[result.postSlug] = result.numViews;
    }
    return views;
  } catch (e) {
    console.error(e);
    return {};
  }
};

export const saveError = async (evt: Zod.infer<typeof ErrorModel>) => {
  if (!evt) {
    return;
  }
  try {
    const errorObj = {
      message: evt.message,
      stackTrace: evt.stackTrace,
    };
    const validatedError = ErrorModel.parse(errorObj);
    const savedError = prisma.error.create({ data: validatedError });
    console.log("Saved error", savedError);
    return savedError;
  } catch (e) {
    console.error(e);
  }
};

export const getErrors = async () => {
  try {
    const errors = await prisma.error.findMany();
    return errors;
  } catch (e) {
    console.error(e);
    return [];
  }
};
