/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily :{
        inter: ['Inter', 'sans-serif' ]
      },
      maxWidth: {
        xll: '1480px',
        mxs: '256px',
        mxll: '1184px',
        mxl: '1120px',
        mx: '1109px'
      },
      colors: {
        grey: '4B5563'
      }
    },
  },
  plugins: [],
}

