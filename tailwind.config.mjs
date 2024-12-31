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
				'lines' : "repeating-linear-gradient(#e66465, #e66465 20px, #9198e5 20px, #9198e5 25px)"
			}
		},
	},
	plugins: [],
}
