/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#7879F1',
        secondary: '#DCE2E9'

      }
    },
  },
  plugins: [],
}

