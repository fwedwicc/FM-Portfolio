/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'bg-grid': "url('/src/assets/grid.png')",
        'border-gradient': 'linear-gradient(-10deg, rgba(21,19,28,1) 30%, rgba(67,59,98,1) 100%)',
      },
    },
  },
  plugins: [],
}

