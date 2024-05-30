import type { APIRoute } from "astro";
import { and, count, db, eq, isDbError, Metric } from "astro:db";

export const prerender = false;

export const GET: APIRoute = async ({ params, request }) => {
  try {
    if (!params.slug) {
      return new Response("Missing slug", { status: 400 });
    }
    const res = await db.insert(Metric).values({
      metricType: "pageview",
      postSlug: params.slug,
      value: 1,
    }).returning();
    const metrics = await db.select({ count: count() }).from(Metric).where(
      and(
        eq(Metric.postSlug, params.slug),
        eq(Metric.metricType, "pageview"),
      ),
    );
    const numViews = metrics[0]?.count || 0;

    return new Response(JSON.stringify({ numViews }), { status: 200 });
  } catch (e) {
    if (isDbError(e)) {
      return new Response("Cannot insert metric", { status: 400 });
    }
    return new Response("An unexpected error occurred", { status: 500 });
  }
};
