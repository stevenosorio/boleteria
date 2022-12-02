/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
        screens: {
          desktop: { min: '1150px' },
          tablet: { min: '750px' },
          '-tablet': {max: '750px' },
        },
    },
  },
  plugins: [],
}
