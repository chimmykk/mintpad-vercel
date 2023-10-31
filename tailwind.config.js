/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
	],
  theme: {
    backgroundColor: {
        bgDark: '#05121b',
        bgBlue: '#0077FF',
        BlueHover: '#0055CC',
        white: '#fff',
        black: '#000',
        gray: '#81859F',
    },
    textColor: {
        gray: '#81859F',
        Dark: '#05121b',
        Blue: '#0077FF',
        white: '#fff',
        black: '#000',
        BlueHover: '#0055CC'
    },
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
      fontFamily: {
        graphikMedium : ['var(--font-GraphikMedium)'],
        graphikRegular : ['var(--font-GraphikRegular)'],
        graphikSemibold : ['var(--font-GraphikSemibold)'],
        graphikBold : ['var(--font-GraphikBold)'],
      },
    extend: {
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}