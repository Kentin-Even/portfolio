import { eq } from "drizzle-orm";
import { afterAll, describe, expect, test } from "vitest";
import { db } from "./index.ts";
import { todos } from "./schema.ts";

// Nécessite Postgres avec le schéma poussé (CI : service postgres + db:push).
describe.skipIf(!process.env.DATABASE_URL)("todos (Postgres)", () => {
	const title = `it-${Date.now()}`;
	afterAll(async () => {
		await db.delete(todos).where(eq(todos.title, title));
	});

	test("insère et relit une todo", async () => {
		await db.insert(todos).values({ title });
		const rows = await db.select().from(todos).where(eq(todos.title, title));
		expect(rows).toHaveLength(1);
	});
});
