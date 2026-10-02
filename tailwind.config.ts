import type { Config } from "tailwindcss";

const config: Config = {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				primary: {
					DEFAULT: '#2563EB', // Vivid Blue
					50: '#EFF6FF',
					100: '#DBEAFE',
					200: '#BFDBFE',
					500: '#3B82F6',
					600: '#2563EB',
					700: '#1D4ED8',
					800: '#1E40AF',
					foreground: '#FFFFFF'
				},
				accent: {
					DEFAULT: '#F97316', // Warm Orange
					50: '#FFF7ED',
					100: '#FFEDD5',
					500: '#F97316',
					600: '#EA580C',
					700: '#C2410C',
					foreground: '#FFFFFF'
				},
				secondary: {
					DEFAULT: '#F1F5F9',
					foreground: '#0F172A'
				},
				muted: {
					DEFAULT: '#F8FAFC',
					foreground: '#64748B'
				},
				border: '#E2E8F0',
				input: '#E2E8F0',
				ring: '#2563EB',
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			fontFamily: {
				sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
			},
			boxShadow: {
				'soft': '0 2px 15px -3px rgba(0, 0, 0, 0.07), 0 4px 6px -2px rgba(0, 0, 0, 0.04)',
				'card': '0 10px 30px -5px rgba(37, 99, 235, 0.06)',
				'card-hover': '0 20px 35px -5px rgba(37, 99, 235, 0.12)',
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
};
export default config;
