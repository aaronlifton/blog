import { describe, beforeEach, expect, test, it } from "vitest";
import { appRouter, type AppRouter } from "$rpc/router.ts";
import { createContext } from "$rpc/context.ts";
import prisma from "$services/prisma.ts";
import type { inferProcedureInput } from "@trpc/server";

// const createUserContext = (authId?: string, permissions?: string[]) => {
// 	let userPermissions = "openid profile email";
// 	if (permissions) {
// 		userPermissions = `${userPermissions} ${permissions.join(" ")}`;
// 	}
// 	return {
// 		session: {
// 			sub: authId,
// 			permissions: userPermissions,
// 		},
// 		user: `{"sub": "${authId}", "permissions": "${userPermissions}"}`,
// 	};
// };
describe("appRouter", () => {
	beforeEach(async () => {
		const ctx = await createContext({});
		const caller = appRouter.createCaller(ctx);

		await prisma.$transaction([
			prisma.blogPostMeta.deleteMany(),
			prisma.error.deleteMany(),
		]);
	});

	it("should increment views", async () => {
		const ctx = await createContext({});
		const caller = appRouter.createCaller(ctx);

		const result = await caller.incrementViews({ id: 1 });
	});

	// it("should increment views", async () => {
	// 	const ctx = await createContext({});
	// 	const caller = appRouter.createCaller(ctx);
	//
	// 	const input: inferProcedureInput<AppRouter["getFile"]> = {
	// 		owner: "facebook",
	// 		repo: "react",
	// 		path: "data/packages/shared/shallowEqual.js",
	// 	};
	//
	// 	const result = await caller.getFile(input);
	//
	// 	expect(result).toMatchObject({
	// 		id: "1",
	// 		title: "Buy milk",
	// 		completed: false,
	// 	});
	// });
});
