/** @type {import("prettier").Config} */

module.exports = {
	semi: true,
	singleQuote: false,
	trailingComma: "all",
	printWidth: 100,
	useTabs: true,
	plugins: [import("prettier-plugin-tailwindcss")],
	tailwindConfig: "./tailwind.config.ts",
};
