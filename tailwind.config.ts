import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			"--blur-height": "var(--blur-height)",
			"--card-blur-height": "var(--card-blur-height)",
			"--card-blur-value": "var(--blur-value, 25px)",
		},
	},
	plugins: [],
};
export default config;
