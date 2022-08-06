/** @type {import('tailwindcss').Config} */
const { join } = require('path');
module.exports = {

darkMode:"class" ,
    content: [
      join(__dirname, './pages/**/*.{js,ts,jsx,tsx}'),
      join(__dirname, './src/**/*.{js,ts,jsx,tsx}'),
      join(__dirname, './components/**/*.{js,ts,jsx,tsx}'),
    ],
  mode:"jit",

  theme: {
    fontFamily:{
      kaushan:['Kaushan Script']
    },
    boxShadow:{
      'custom-light':'0px 0px 10px #313131',
      'custom-dark':'5px 5px 10px #0a0c0e , -5px -5px 10px #14161c',
    },
  
    extend: {
      colors :{
        green:{
          DEFAULT:'#00F260'
        },
      dark:{
        DEFAULT :"#010101",
        100:"#0a0b0e",
        200 :"#16181d",
        500 :"#0f1115",
        700 :"#202125",


      },

      }
      
    },
  },
  variants : {
    extend:{
      boxShadow:['dark']
    }
  },
  plugins: [

  ],
}


