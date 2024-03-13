import { createClient } from "@libsql/client";
import os from "node:os";
import prisma from "./db";
import { ErrorModel } from "$prisma/zod/error";

export const client = createClient({
  url: import.meta.env.TURSO_DB_URL,
  authToken: import.meta.env.TURSO_DB_AUTH_TOKEN,
});

let isLocal;
const isLocalhost = () => {
  if (isLocal !== undefined) {
    return isLocal;
  }

  // Mac M2 Mac Mini has 12 cores
  isLocal = os.arch() == "arm64" && os.cpus().length == 12;
  return isLocal;
};
export const getViewsBySlug = async (slug) => {
  if (isLocalhost() || !slug) {
    return 0;
  }

  const upsert = async () => {
    const updated = prisma.blogPostMeta.upsert({
      where: {
        postSlug: slug,
      },
      create: {
        postSlug: slug,
        numViews: initialViewCount,
      },
      update: {
        numViews: blogPost.numViews + 1,
      },
      select: {
        postSlug: true,
        numViews: true,
      },
    });
  };

  try {
    const initialViewCount = 0;
    let blogPost = await prisma.blogPostMeta.findUnique({
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
    if (!blogPost) {
      return initialViewCount;
    }
    blogPost = upsert();
    return blogPost.numViews;
  } catch (e) {
    if (e.code === "P2002") {
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
  if (isLocalhost()) {
    return {};
  }
  try {
    const results = await prisma.blogPostMeta.findMany({
      select: {
        postSlug: true,
        numViews: true,
      },
    });
    const views = {};
    for (const result of results) {
      views[result.postSlug] = result.numViews;
    }
    return views;
  } catch (e) {
    console.error(e);
    return {};
  }
};

export const saveError = async (error) => {
  if (!error) {
    return;
  }
  try {
    const errorObj = {
      message: error.message,
      stacktrace: error.stack,
    };
    ErrorModel.parse(errorObj);

    const savedError = prisma.error.create({ data: errorObj });
  } catch (e) {
    console.error(e);
  }
};
