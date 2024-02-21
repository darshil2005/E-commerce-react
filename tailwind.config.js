/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'xs' : '320px',
        'mm' : '375px',
        'ml' : '425px',
        '1xl' : '1440px',
      },
    },
    
  },
  plugins: [],
}