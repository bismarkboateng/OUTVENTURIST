/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-color': '#3c6469'
      },

      fontFamily: {
        'SG': ['Schibsted Grotesk', 'sans-serif']
      },

      keyframes: {
        slideDown: {
          '0%': { top: '100%'},
          '100%': { top: '190%'}
        }
      },

      animation: {
        slideDown: 'slideDown 0.3s ease-in'
      }
    },
  },
  plugins: [],
}