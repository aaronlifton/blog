import type { APIRoute } from "astro";
import { getErrors, saveError } from "$/services/turso.js";
import { ErrorModel } from "$prisma/zod/error";

export const GET: APIRoute = async ({ params, request }) => {
  const errors = await getErrors();
  return new Response(
    JSON.stringify(
      { errors },
      (_, value) => (typeof value === "bigint" ? value.toString() : value), // return everything else unchanged
    ),
  );
};
export const POST: APIRoute = async ({ params: _params, request }) => {
  const data = await request.json();
  console.log({ data });
  const errorObj = {
    message: data.message,
    stacktrace: data.stack,
  };
  console.log({ ErrorModel, errorObj });
  return new Response({ status: 200 })
  // const validatedError = ErrorModel.parse(errorObj);

  // try {
  //   const error = await saveError(validatedError);
  //   if (error !== undefined) {
  //     console.log("Created Error#%s", error.id);
  //   }
  //   return new Response(
  //     JSON.stringify({
  //       message: "Success!",
  //     }),
  //     { status: 200 },
  //   );
  // } catch (e) {
  //   return new Response(
  //     JSON.stringify({
  //       message: "Could not save error: " + e.message,
  //     }),
  //     { status: 500 },
  //   );
  // }
};
