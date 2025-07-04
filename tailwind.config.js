/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html',
    './src/**/*.{html,js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        satoshi: ['Satoshi', 'sans-serif'],
        clashDisplay: ['Clash Display', 'sans-serif'],
        generalSans: ['General Sans', 'sans-serif'],
        cabinet: ['Cabinet Grotesk', 'sans-serif'],
        ranade: ['Ranade', 'sans-serif'],
        clashGrotesk: ['Clash Grotesk', 'sans-serif'],
        stardom: ['Stardom', 'sans-serif'],
        supreme: ['Supreme', 'sans-serif'],
        boska: ['Boska', 'serif'],
        telma: ['Telma', 'serif'],
        tanker: ['Tanker', 'sans-serif'],
        britney: ['Britney', 'cursive'],
        melodrama: ['Melodrama', 'serif'],
        zina: ['Zina', 'serif'],
        newTitle: ['New Title', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
        bebas: ['Bebas Neue', 'cursive'],
        nunito: ['Nunito', 'sans-serif'],
        excon: ['Excon', 'sans-serif'],
        gambetta: ['Gambetta', 'serif'],
        khand: ['Khand', 'sans-serif'],
        switzer: ['Switzer', 'sans-serif'],
        quilon: ['Quilon', 'sans-serif'],
        rowan: ['Rowan', 'serif'],
        erode: ['Erode', 'sans-serif'],
        quicksand: ['Quicksand', 'sans-serif'],
        archivo: ['Archivo', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
