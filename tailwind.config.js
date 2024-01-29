/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        PrimaryColor:"#348f6c",
        SecondaryColor:"#e2c992",
        color3rd:"#3f3d56",
        color4th:"#c0c0c0",
        cardbg:"#fdf9f3"
      }
    },
  },
  plugins: [],
}