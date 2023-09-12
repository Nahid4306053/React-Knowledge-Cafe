/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    padding: {
      DEFAULT: '2rem',
      sm: '2rem',
      lg: '4rem',
      xl: '5rem',
      '2xl': '6rem',
    },
    container: {
      center: true,
      screens: {
        sm: '600px',
        md: '728px',
        lg: '984px',
        xl: '1240px',
        '2xl': '1400px',
      },
      },
      colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'black': '#000',
      'Primary': '#FEBC35',
    },
    extend: {},
  },
  plugins: [require("daisyui")],
} 