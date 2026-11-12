import { expect, test } from "vitest";
import { cn } from "./utils.ts";

test("cn fusionne les classes Tailwind en conflit", () => {
	expect(cn("p-2", "p-4")).toBe("p-4");
});
