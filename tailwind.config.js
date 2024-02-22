/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      fontFamily: {
        ttchocolates_light: ["TT Chocolates Light", "sans-serif"],
        ttchocolates_regular: ["TT Chocolates Regular", "sans-serif"],
        bettersaturday: ["Better Saturday", "serif"],
      },
    },
  },
  plugins: [
    require('tailwindcss-opentype')
  ],
}
