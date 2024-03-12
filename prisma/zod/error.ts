import * as z from "zod";

export const ErrorModel = z.object({
  id: z.string(),
  message: z.string(),
  stackTrace: z.string(),
  createdAt: z.date(),
});
