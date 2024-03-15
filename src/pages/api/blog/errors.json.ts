import type { APIRoute } from "astro";
import { getErrors } from "$/services/turso.js";

export const GET: APIRoute = async ({ params, request }) => {
  let errors = await getErrors();
  return new Response(
    JSON.stringify(
      { errors },
      (key, value) => (typeof value === "bigint" ? value.toString() : value), // return everything else unchanged
    ),
  );
};
