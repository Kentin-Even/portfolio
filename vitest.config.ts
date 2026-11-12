import react from "@vitejs/plugin-react";
import { defineConfig } from "vitest/config";

const project = (name: string, environment: "node" | "jsdom") => ({
	extends: true,
	test: {
		name,
		environment,
		include: [`src/**/*.${name}.test.{ts,tsx}`],
		setupFiles: environment === "jsdom" ? ["./vitest.setup.ts"] : [],
	},
});

export default defineConfig({
	plugins: [react()],
	resolve: { tsconfigPaths: true },
	test: {
		projects: [
			project("unit", "node"),
			project("integration", "node"),
			project("component", "jsdom"),
		],
	},
});
