/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#0C4A6E',
        accent: '#0D9488',
      },
      boxShadow: {
        soft: '0 10px 30px rgba(13, 148, 136, 0.15)',
      },
    },
  },
  plugins: [],
};
