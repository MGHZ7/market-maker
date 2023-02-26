const colors = require('tailwindcss/colors')
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ], theme: {
    colors: {
      primary: colors.blue[500],
      secondary: colors.red[300],
      background: colors.blue[50],
      surface: colors.white,
      ...colors
    },
    extend: {},
  },
  plugins: [],
}
