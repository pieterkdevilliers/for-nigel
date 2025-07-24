/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./*.html', // This tells Tailwind to scan all .html files in the root folder
	],
	theme: {
		extend: {
			colors: {
				red: '#D2102F',
				blue: '#0E71B8',
			},
			fontFamily: {
				poppins: [
					'Poppins',
					...require('tailwindcss/defaultTheme').fontFamily.sans,
				],
			},
		},
	},
	plugins: [],
};
