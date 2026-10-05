/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: '#F7F4EF',
        dark: '#1A1A1A',
        accent: '#00A36C',
      },
      fontFamily: {
        header: ["Playfair Display", "serif"],
        body: ["Pretendard", "sans-serif"],
      },
    },
  },
  plugins: [],
}
