import type { Config } from 'tailwindcss'

const config: Config = {
    darkMode: ["class"],
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      backgroundColor: {
        'bgdark' : '#05121b'
      },
    },
  },
  plugins: [],
}
export default config
