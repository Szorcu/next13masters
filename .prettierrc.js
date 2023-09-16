/** @type {import("prettier").Config} */

module.exports = {
	semi: false,
	singleQuote: false,
	trailingComma: "all",
	printWidth: 100,
	useTabs: true,
	plugins: ["prettier-plugin-tailwindcss"],
	tailwindConfig: "./tailwind.config.ts",
};
