/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	css: {
		// Import global styles
		include: ['./src/styles/global.css'],
	},
	theme: {
		extend: {
			colors: {
				white: '#F2F2F2',
				mid: '#515151',
				dark: '#212121',
				pop: '#fdba74',
				green: '#748B75',
				hover: '#212121',
			},
			fontFamily: {
				sans: ['Montserrat', 'sans-serif'],
			},
		},
	},
	plugins: [],
}
