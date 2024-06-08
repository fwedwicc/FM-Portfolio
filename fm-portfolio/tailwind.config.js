/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'grid': "url('/src/assets/grid.png')",
        'grid-2': "url('/src/assets/grid-03.png')",
        'border-gradient': 'linear-gradient(-10deg, rgba(21,19,28,1) 30%, rgba(67,59,98,1) 100%)',
        'border-gradient-1': 'linear-gradient(35deg, rgba(67,59,98,1) 9%, rgba(21,19,28,1) 33%)',
      },
      colors: {
        base: "#15131C",

      }
    },
  },
  plugins: [],
}

