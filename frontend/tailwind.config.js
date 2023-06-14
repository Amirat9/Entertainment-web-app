/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        red: '#FC4747',
        darkBlue: '#10141E',
        greyishBlue: '#5a698F',
        semiDarkBlue: '#161D2F',
      },
      fontFamily: {
        outline: ['Outline', 'sans-serif'],
      },
      screens: {
        '2xl': '1340px',
      },
    },
  },
  plugins: [],
};
