/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
	theme: {
		extend: {
			colors: {
				primary: "#187de9",
			},
			fontFamily: {
				sans: ["Helvetica", "Arial", "sans-serif"],
			},
		},
	},
	plugins: [],
};
