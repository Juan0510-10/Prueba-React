/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: '#D4AF37',
        'brand-black': '#000000',
        'card-bg': '#0b0b0b',
      },
    },
  },
  plugins: [],
}