/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{pug, html,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      letterSpacing: {
        widest: '.16875em'
      }
    },
  },
  plugins: [],
}
