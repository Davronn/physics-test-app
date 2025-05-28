// tailwind.config.js

module.exports = {
  darkMode: 'class', // yoki 'media' deb yozsa ham bo‘ladi, lekin 'class' afzal
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
2