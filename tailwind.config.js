/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.{html,js}'],
  theme: {
    extend: {
      backgroundImage: {
        patternTop: 'url("./images/bg-pattern-top.svg")',
        patternBottom: 'url("./images/bg-pattern-bottom.svg")',
        patternCard: 'url("./images/bg-pattern-card.svg")',
      },
    },
  },
  plugins: [],
};
