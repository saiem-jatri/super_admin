/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme');
module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        corporate: '#F04935',
        corporateLight: '#',
        corporateBg: '#F7F7F7',
        corporateGray: '#',
        corporateBlack: '#',
        corporateGreen: '#',
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