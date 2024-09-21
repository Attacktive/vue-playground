/// <reference types="vitest/config" />
import { defineConfig, mergeConfig } from "vite";
import viteConfig from "./vite.config";
import { fileURLToPath, URL } from "node:url";

export default mergeConfig(
	viteConfig,
	defineConfig({
		test: {
			globals: true,
			environment: "jsdom",
			alias: {
				"@": fileURLToPath(new URL("./src", import.meta.url))
			}
		}
	})
);
