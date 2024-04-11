import { z } from "zod";
export const IncrementMetricInput = z.object({
  metricType: z.enum(["views", "gh_ratelimit_errors"]),
  slug: z.string(),
});
