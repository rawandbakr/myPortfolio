/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {},
    backgroundImage:{
      "bgHero":"URL('https://images.pexels.com/photos/1169754/pexels-photo-1169754.jpeg')"
    }
  },
  plugins: [
    require('tailwind-scrollbar')({ nocompatible: true }),],
}