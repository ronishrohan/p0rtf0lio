/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				border: "black",
				surface: "white",
				primary: "black",
			},
			fontFamily: {
				'body' : ["JetBrains Mono", "monospace"],
			},
			backgroundImage: {
				'lines' : "repeating-linear-gradient(45deg, white,white 1px, black 1.5px, black 2.5px, white 3px, white 10px)",
			}
		},
	},
	plugins: [],
}
