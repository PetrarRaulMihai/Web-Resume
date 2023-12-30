/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      height:{
        '85':'85%'
      },   
        // this is for the top-12%  
      inset:{
        '12':'12%'
      }
    },
  },
  plugins: [],
}