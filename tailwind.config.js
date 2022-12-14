/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          100: "#dedef3",
          200: "#bdbee6",
          300: "#9d9dda",
          400: "#7c7dcd",
          500: "#5b5cc1",
          600: "#494a9a",
          700: "#373774",
          800: "#24254d",
          900: "#121227"
        },
        brandTransparent: {
          500: "#5b5cc1b3",
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
}
