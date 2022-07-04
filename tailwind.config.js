/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    colors: {
      white: '#ffffff',
      black: '#180A0A',
      theme: '#D8D2CB',
      bodyBg: '#EFFFFD',
      button: {
        DEFAULT: '#61A4BC',
        light: '#90bfd0',
        dark: '#31525e',
      },
      success: '#76BA99',
      error: '#FD5D5D',
    },
    extend: {},
  },
  plugins: [],
};
