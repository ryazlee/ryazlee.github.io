/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
	theme: {
		extend: {
			colors: {
				primary: "var(--primary)",
				bg: "var(--bg)",
				fg: "var(--fg)",
				muted: "var(--fg-muted)",
				faint: "var(--fg-faint)",
				line: "var(--line)",
			},
			fontFamily: {
				sans: ["'Instrument Sans'", "-apple-system", "BlinkMacSystemFont", "sans-serif"],
			},
			maxWidth: {
				prose: "52rem",
			},
		},
	},
	plugins: [],
};
