/** @type {import('tailwindcss').Config} */
module.exports = {screens: {
  'sm': {'max': '550px'},
  'md': {'max': '700px'},
  'lg': {'max': '1050px'},
},
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}