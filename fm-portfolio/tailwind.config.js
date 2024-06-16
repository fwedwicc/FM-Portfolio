/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'grid-1': "url('/src/assets/grid-01.png')",
        'grid-2': "url('/src/assets/grid-02.png')",
        'compiled-proj': "url('/src/assets/compiled-projects.png')",
        'border-gradient': 'linear-gradient(-10deg, rgba(21,19,28,1) 30%, rgba(67,59,98,1) 100%)',
        'border-gradient-1': 'linear-gradient(35deg, rgba(67,59,98,1) 9%, rgba(21,19,28,1) 33%)',
        'border-gradient-2': 'linear-gradient(120deg, rgba(67,59,98,1) 9%, rgba(21,19,28,1) 33%)',
        'border-gradient-3': 'linear-gradient(170deg, rgba(67,59,98,1) 9%, rgba(21,19,28,1) 33%)',
        'border-gradient-4': 'linear-gradient(-150deg, rgba(67,59,98,1) 9%, rgba(21,19,28,1) 33%)',
        'border-gradient-5': 'linear-gradient(0deg, rgba(67,59,98,1) 9%, rgba(21,19,28,1) 33%)',
      },
      colors: {
        base: "#15131C",
      }
    },
  },
  plugins: [],
}

