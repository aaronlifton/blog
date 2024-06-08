import type { inferProcedureInput } from "@trpc/server";
import { afterEach, beforeEach, describe, expect, it, test, vi } from "vitest";
import { createContextInner } from "~rpc/context.ts";
import { type AppRouter, appRouter, t } from "~rpc/router.ts";

vi.mock("../rpc-server/services/github.ts", () => {
  return {
    default: {
      getRepoContents: (input: string) =>
        new Promise((res) =>
          res({
            json: () =>
              new Promise((res) =>
                res({
                  path: "data/packages/shared/shallowEqual.js",
                })
              ),
          })
        ),
      getCommits: vi.fn(),
    },
  };
});

vi.mock("astro:db", () => ({
  db: {
    insert: () => ({
      values: ((values: (string | number)[]) => ({ returning: vi.fn(() => values) })),
    }),
  },
  Metric: {},
  ErrorTable: {},
}));

describe("appRouter", () => {
  afterEach(() => {
    vi.restoreAllMocks();
  });

  describe("incrementMetric", () => {
    it("should increment views", async () => {
      const ctx = await createContextInner();
      const createCaller = t.createCallerFactory(appRouter);
      const caller = createCaller(ctx);

      // vi.spyOn(caller, "incrementMetric");
      const result = await caller.incrementMetric({
        postSlug: "hello world",
        metricType: "views",
      });
      // remove id from the object
      expect(result).toMatchObject({
        postSlug: "hello world",
        metricType: "views",
        value: 1,
      });
    });
  });

  it("should call the Github API", async () => {
    const ctx = await createContextInner();
    const createCaller = t.createCallerFactory(appRouter);
    const caller = createCaller(ctx);

    const input: inferProcedureInput<AppRouter["getFile"]> = {
      owner: "facebook",
      repo: "react",
      path: "data/packages/shared/shallowEqual.js",
    };
    const result = await caller.getFile(input);
    expect(result).toMatchObject({
      path: "data/packages/shared/shallowEqual.js",
    });
  });
});
