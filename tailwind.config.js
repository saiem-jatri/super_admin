/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme');
module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        corporate: '#F04935',
        primaryText: '#151414',
        corporateBg: '#F7F7F7',
        corporateBorder: '#DBDBDB',
        corporateAsh: '#8D8D8F',
        secondaryText: '#4D4D4F',
        corporateYellow: '#',
      },
      fontFamily: {
        inter: ['"Inter"', ...defaultTheme.fontFamily.sans]
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}