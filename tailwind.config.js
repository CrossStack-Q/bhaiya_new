/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        '3xl': '0 8px 0px 0px rgba(135, 206, 235, 0.25)',
      }
    },
  },
  plugins: [],
}