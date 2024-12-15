import { mergeConfig } from "vite";
import { defineConfig } from "vitest/config";
import viteConfig from "./vite.config";
import { resolve } from "path";

export default mergeConfig(
	viteConfig,
	defineConfig({
		test: {
			globals: true,
			environment: "jsdom",
			alias: {
				"@": resolve(__dirname, "./src")
			},
			coverage: {
				provider: "v8",
				reporter: ["text", "json", "json-summary"],
				reportOnFailure: true
			}
		}
	})
);
