import * as z from "zod";

export const MetricModel = z.object({
  id: z.string(),
  postSlug: z.string(),
  value: z.bigint(),
  metricType: z.string(),
});
