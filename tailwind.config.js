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
        primary: {
          100: '#f8f9ff', // new
          200: '#E0E7FF', // new
          300: '#cce2fc',
          400: '#eef2fd',
          500: '#151E29',
          600: '#0077FF',
          700: '#0265dd',
      },
      mintpad: {
          100: '#FAFAFA', // new
          200: '#ECEDEF', // new
          300: '#656f77',
          400: '#8C98A9', // new
          500: '#05121b',
          600: '#000000',
          700: '#2E384D', // new
          800: '#151E29', // new
          900: '#21272E', // new
      }
    },
    textColor: {
        gray: '#81859F',
        Dark: '#05121b',
        Blue: '#0077FF',
        white: '#fff',
        black: '#000',
        BlueHover: '#0055CC',
        primary: {
          100: '#f8f9ff', // new
          200: '#E0E7FF', // new
          300: '#cce2fc',
          400: '#eef2fd',
          500: '#151E29',
          600: '#0077FF',
          700: '#0265dd',
      },
      mintpad: {
          100: '#FAFAFA', // new
          200: '#ECEDEF', // new
          300: '#656f77',
          400: '#8C98A9', // new
          500: '#05121b',
          600: '#000000',
          700: '#2E384D', // new
          800: '#151E29', // new
          900: '#21272E', // new
      }
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
      colors: {
        
    },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}