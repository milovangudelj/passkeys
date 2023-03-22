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
			backgroundImage: {
				"gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
			},
			animation: {
				slide: "slide 60s linear infinite",
				suaf: "suaf 400ms cubic-bezier(0.16, 1, 0.3, 1)",
				sraf: "sraf 400ms cubic-bezier(0.16, 1, 0.3, 1)",
				sdaf: "sdaf 400ms cubic-bezier(0.16, 1, 0.3, 1)",
				slaf: "slaf 400ms cubic-bezier(0.16, 1, 0.3, 1)",
				orbit: "orbit 60s linear infinite",
				"orbit-1": "orbit-1 60s linear infinite",
				"orbit-2": "orbit-2 60s linear infinite",
				"orbit-3": "orbit-3 60s linear infinite",
				"orbit-4": "orbit-4 60s linear infinite",
				"orbit-5": "orbit-5 60s linear infinite",
				"orbit-6": "orbit-6 60s linear infinite",
				"orbit-7": "orbit-7 60s linear infinite",
			},
			keyframes: {
				slide: {
					"0%": {
						transform: "translateX(0)",
					},
					"100%": {
						transform: "translateX(-100%)",
					},
				},
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
				orbit: {
					"0%": {
						transform:
							"rotate(0turn) translateX(var(--orbit-radius)) rotate(0turn)",
					},
					"100%": {
						transform:
							"rotate(1turn) translateX(var(--orbit-radius)) rotate(-1turn)",
					},
				},
				"orbit-1": {
					"0%": {
						transform:
							"rotate(0.142turn) translateX(var(--orbit-radius)) rotate(-0.142turn)",
					},
					"100%": {
						transform:
							"rotate(1.142turn) translateX(var(--orbit-radius)) rotate(-1.142turn)",
					},
				},
				"orbit-2": {
					"0%": {
						transform:
							"rotate(0.284turn) translateX(var(--orbit-radius)) rotate(-0.284turn)",
					},
					"100%": {
						transform:
							"rotate(1.284turn) translateX(var(--orbit-radius)) rotate(-1.284turn)",
					},
				},
				"orbit-3": {
					"0%": {
						transform:
							"rotate(0.426turn) translateX(var(--orbit-radius)) rotate(-0.426turn)",
					},
					"100%": {
						transform:
							"rotate(1.426turn) translateX(var(--orbit-radius)) rotate(-1.426turn)",
					},
				},
				"orbit-4": {
					"0%": {
						transform:
							"rotate(0.568turn) translateX(var(--orbit-radius)) rotate(-0.568turn)",
					},
					"100%": {
						transform:
							"rotate(1.568turn) translateX(var(--orbit-radius)) rotate(-1.568turn)",
					},
				},
				"orbit-5": {
					"0%": {
						transform:
							"rotate(0.710turn) translateX(var(--orbit-radius)) rotate(-0.710turn)",
					},
					"100%": {
						transform:
							"rotate(1.710turn) translateX(var(--orbit-radius)) rotate(-1.710turn)",
					},
				},
				"orbit-6": {
					"0%": {
						transform:
							"rotate(0.852turn) translateX(var(--orbit-radius)) rotate(-0.852turn)",
					},
					"100%": {
						transform:
							"rotate(1.852turn) translateX(var(--orbit-radius)) rotate(-1.852turn)",
					},
				},
				"orbit-7": {
					"0%": {
						transform:
							"rotate(0.994turn) translateX(var(--orbit-radius)) rotate(-0.994turn)",
					},
					"100%": {
						transform:
							"rotate(1.994turn) translateX(var(--orbit-radius)) rotate(-1.994turn)",
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
