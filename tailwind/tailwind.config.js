/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,css}",
  ],
  theme: {
    extend: {
      colors:{
        'test-color':'#00FFFF'
      },
      padding:{
        '900':'10rem'
      }
    },
    fontFamily:{
      testFont:['test']
    },
    fontSize:{
      '10xl':'10.0098rem'
    }
  },
  plugins: [],
}

