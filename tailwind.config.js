/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#EF4444',
        'secondary': '#23233A',
        'tertiary': '#202027',
        'background': '#18181C',
        'border': '#36364A'
      },
    },
  },
  plugins: [],
}