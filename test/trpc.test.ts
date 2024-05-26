import { createContext } from "~rpc/context.ts";
import { type AppRouter, appRouter } from "~rpc/router.ts";
import prisma from "~services/prisma.ts";
import type { inferProcedureInput } from "@trpc/server";
import { afterEach, beforeEach, describe, expect, it, test, vi } from "vitest";
import { mock } from "vitest-mock-extended";
import githubService from "../rpc-server/services/github.ts";
import prismaMock from "./mocks/prisma.ts";

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

describe("appRouter", () => {
  beforeEach(async () => {
    const ctx = await createContext({ prisma: prismaMock });
    const caller = appRouter.createCaller(ctx);

    await prisma.$transaction([
      prisma.metric.deleteMany(),
      prisma.error.deleteMany(),
    ]);
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  describe("incrementMetric", () => {
    it("should increment views", async () => {
      const upsertReturnValue = {
        id: "a1b2c3d4",
        postSlug: "hello world",
        metricType: "views",
        value: BigInt(1),
      };
      prismaMock.metric.upsert.mockResolvedValue(upsertReturnValue);
      const ctx = await createContext({ prisma: prismaMock });
      const caller = appRouter.createCaller(ctx);

      // vi.spyOn(caller, "incrementMetric");
      const result = await caller.incrementMetric({
        slug: "hello world",
        metricType: "views",
      });
      // remove id from the object
      const expectedReturnValue = Object.keys(upsertReturnValue).reduce(
        (acc, key) => {
          if (key !== "id") {
            acc[key] = upsertReturnValue[key];
          }
          return acc;
        },
        {},
      );
      expect(result).toMatchObject(expectedReturnValue);
    });
  });

  it("should call the Github API", async () => {
    const ctx = await createContext({
      prisma: prismaMock,
      githubService,
    });
    const caller = appRouter.createCaller(ctx);

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
