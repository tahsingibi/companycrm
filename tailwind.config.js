/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontSize: {
        h1: ['38px', '46px'],
      },
      fontFamily: {
        sans: [
          '"Inter", sans-serif',
          {
            fontFeatureSettings: '"liga","calt","cv06","cv11","cv05"',
          },
        ],
      },
      colors: {
        background: '#F7F9FD',
        soft: '#E4F0FF',
        primary: '#0168FF',
        'gray-12': '#141414',
        'neutral-100': '#f1f1f1',
        'neutral-200': '#a7a7a7',
        'neutral-300': '#666666',
      },
    },
  },
  plugins: [],
};
