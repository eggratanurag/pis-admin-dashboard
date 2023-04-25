/** @type {import('tailwindcss').Config} */
const { violet, blackA, mauve, green } = require('@radix-ui/colors');
// const defautTheme = require('tailwindcss/defaultTheme')
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",

  ],
  mode: 'jit',
  theme: {
    extend: {
      colors: {

        ...mauve,
        ...violet,
        ...green,
        ...blackA,
      },
      keyframes: {
        overlayShow: {
          from: { opacity: 0 },
          to: { opacity: 1 },
        },
        contentShow: {
          from: { opacity: 0, transform: 'translate(-50%, -48%) scale(0.96)' },
          to: { opacity: 1, transform: 'translate(-50%, -50%) scale(1)' },
        },
      },
      animation: {
        overlayShow: 'overlayShow 150ms cubic-bezier(0.16, 1, 0.3, 1)',
        contentShow: 'contentShow 150ms cubic-bezier(0.16, 1, 0.3, 1)',
      },
      
      fontFamily: {
        "poppins": ['Poppins']
       
      },
      screens: {
        'md': '950px',
         "xs": '540px',
      // ...defautTheme.screens,
     
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
   
  ],
}
