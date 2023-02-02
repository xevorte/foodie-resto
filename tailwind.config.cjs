/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        dark: '#262626',
        primary: '#F05756',
        secondary: '#9A9A9A',
        light: '#F9F8F9',
      },
      screens: {
        'xlg': '1282px',
        '3xl': '1920px',
      },
    },
  },
  plugins: [],
};
