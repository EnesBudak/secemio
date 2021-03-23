const colors = require('tailwindcss/colors')
module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily:{
        lato:['Lato','system-ui']
      },
      colors:{
        lime:colors.lime,
        gray:colors.trueGray,
        green:colors.green
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
