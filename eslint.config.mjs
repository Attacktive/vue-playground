import js from "@eslint/js";
import ts from "typescript-eslint";
import pluginVue from "eslint-plugin-vue";

/** @type {import("eslint").Linter.FlatConfig[]} */
export default ts.config(
	{
		ignores: ["dist/*", "coverage/*"]
	},
	js.configs.recommended,
	...ts.configs.recommended,
	...pluginVue.configs["flat/recommended"],
	{
		plugins: {
			"typescript-eslint": ts.plugin
		},
		languageOptions: {
			parserOptions: {
				parser: ts.parser,
				project: "./tsconfig.json",
				extraFileExtensions: [".vue"],
				sourceType: "module"
			}
		}
	},
	{
		rules: {
			"@typescript-eslint/no-unused-vars": [
				"warn",
				{
					"args": "all",
					"argsIgnorePattern": "^_",
					"caughtErrors": "all",
					"caughtErrorsIgnorePattern": "^_",
					"destructuredArrayIgnorePattern": "^_",
					"varsIgnorePattern": "^_",
					"ignoreRestSiblings": true
				}
			],
			"vue/html-indent": [
				"warn",
				"tab"
			],
			"vue/max-attributes-per-line": "off",
			"vue/singleline-html-element-content-newline": "off"
		}
	}
);
