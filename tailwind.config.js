const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
	darkMode: "class",
	theme: {
		extend: {
			fontFamily: {
				sans: ["var(--inter-font)", ...defaultTheme.fontFamily.sans],
			},
			animation: {
				suaf: "suaf 400ms cubic-bezier(0.16, 1, 0.3, 1)",
				sraf: "sraf 400ms cubic-bezier(0.16, 1, 0.3, 1)",
				sdaf: "sdaf 400ms cubic-bezier(0.16, 1, 0.3, 1)",
				slaf: "slaf 400ms cubic-bezier(0.16, 1, 0.3, 1)",
			},
			keyframes: {
				suaf: {
					"0%": {
						opacity: "0",
						transform: "translateY(2px)",
					},
					"100%": {
						opacity: "1",
						transform: "translateY(0)",
					},
				},
				sraf: {
					"0%": {
						opacity: "0",
						transform: "translateX(-2px)",
					},
					"100%": {
						opacity: "1",
						transform: "translateX(0)",
					},
				},
				sdaf: {
					"0%": {
						opacity: "0",
						transform: "translateY(-2px)",
					},
					"100%": {
						opacity: "1",
						transform: "translateY(0)",
					},
				},
				slaf: {
					"0%": {
						opacity: "0",
						transform: "translateX(2px)",
					},
					"100%": {
						opacity: "1",
						transform: "translateX(0)",
					},
				},
			},
			data: {
				open: "state=open",
				closed: "state=closed",
				top: "side=top",
				right: "side=right",
				bottom: "side=bottom",
				left: "side=left",
			},
		},
	},
	plugins: [require("@tailwindcss/forms")],
};
