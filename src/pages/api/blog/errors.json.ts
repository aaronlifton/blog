import type { APIRoute } from "astro";
import { db, ErrorTable, isDbError } from "astro:db";

export const POST: APIRoute = async ({ params: _params, request }) => {
  try {
    const data = await request.json();
    const error = {
      message: data.message,
      stacktrace: data.stack,
    };
    await db.insert(ErrorTable).values(error);
    return new Response("", { status: 200 });
  } catch (e) {
    if (isDbError(e)) {
      return new Response("Cannot insert error", { status: 400 });
    }
    console.error(e);
    return new Response("An unexpected error occurred", { status: 500 });
  }
};
