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
      colors: {
        bgPrimary: '#19A1AE',
        textPrimary: '#2E3349',
        textSecondary: '#6B7082',
        divider: '#E8E9EC',
      },
      fontFamily: {
        kumbhSans: ['Kumbh Sans', 'sans-serif'],
      },
      boxShadow: {
        cardShadow: '0px 50px 100px -20px rgba(8, 70, 94, 0.5)',
      },
    },
  },
  plugins: [],
};
