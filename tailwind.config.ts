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
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				chart: {
					'1': 'hsl(var(--chart-1))',
					'2': 'hsl(var(--chart-2))',
					'3': 'hsl(var(--chart-3))',
					'4': 'hsl(var(--chart-4))',
					'5': 'hsl(var(--chart-5))'
				},
				// Custom Design System Colors
				navy: {
					900: '#0A1F44', // Deep Navy Base
					950: '#0F172A', // Near Black Secondary (Slate 950 essentially)
				},
				brand: {
					cyan: '#00F2FF',    // Vibrant Cyan from Logo
					purple: '#7000FF',  // Vibrant Purple from Logo
					indigo: '#6E48AA',  // Indigo accent
					blue: '#3B82F6',
					silver: '#cbd5e1',
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			fontFamily: {
				sans: ['var(--font-inter)', 'sans-serif'], // We'll need to load Inter
			},
			keyframes: {
				fadeInUp: {
					'0%': { opacity: '0', transform: 'translateY(30px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' },
				},
				gradientShift: {
					'0%, 100%': { 'background-position': '0% 50%' },
					'50%': { 'background-position': '100% 50%' },
				},
				float: {
					'0%, 100%': { transform: 'translateY(0)' },
					'50%': { transform: 'translateY(-10px)' },
				},
				glowPulse: {
					'0%, 100%': { boxShadow: '0 0 20px rgba(139, 92, 246, 0.4)' },
					'50%': { boxShadow: '0 0 40px rgba(139, 92, 246, 0.8)' },
				},
			},
			animation: {
				fadeInUp: 'fadeInUp 0.8s ease-out forwards',
				gradientShift: 'gradientShift 20s ease infinite',
				float: 'float 3s ease-in-out infinite',
				glowPulse: 'glowPulse 3s infinite',
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
};
export default config;
