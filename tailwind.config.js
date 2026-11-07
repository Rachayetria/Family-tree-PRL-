/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      colors: {
        obsidian: '#07040d',
        cardBg: '#130a1c',
        cardHover: '#211130',
        goldBorder: '#d4af37',
        goldText: '#f3e5ab',
        lineParent: '#8a63be',
        lineMarriage: '#d4af37',
        lineAdopted: '#00b4d8',
        lineRivalry: '#e63946',
      },
      fontFamily: {
        cinzel: ['Cinzel', 'Georgia', 'serif'],
        sans: ['Segoe UI', 'Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
