import { createClient } from "@libsql/client";

export const client = createClient({
	url: import.meta.env.TURSO_DB_URL,
	authToken: import.meta.env.TURSO_DB_AUTH_TOKEN,
});

export const getViewsBySlug = async (slug) => {
	if (!slug) {
		return 0;
	}
	try {
		const initialViewCount = 0;
		const transaction = await client.transaction("write");
		const rsSelected = await transaction.execute({
			sql: "SELECT * FROM post_stats WHERE slug = :slug",
			args: { slug },
		});
		const prevViewCount = rsSelected?.rows?.length
			? rsSelected.rows[0].views
			: initialViewCount;
		const rsUpdated = await transaction.execute({
			sql: "INSERT INTO post_stats (uid, slug, views) VALUES (:uid, :slug, :views) ON CONFLICT(slug) DO UPDATE SET views = :views RETURNING views",
			args: {
				uid: crypto.randomUUID(),
				slug,
				views: prevViewCount + 1,
			},
		});
		await transaction.commit();
		return rsUpdated.rows[0].views;
	} catch (e) {
		console.error(e);
		return 0;
	}
};

export const saveError = async (error) => {
	if (!error) {
		return;
	}
	try {
		const transaction = await client.transaction("write");
		await transaction.execute({
			sql: "INSERT INTO errors (uid, error) VALUES (:uid, :error)",
			args: {
				uid: crypto.randomUUID(),
				error,
			},
		});
		await transaction.commit();
	} catch (e) {
		console.error(e);
	}
};
