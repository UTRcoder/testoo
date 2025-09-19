/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          500: '#2563eb',
          700: '#1d4ed8'
        }
      },
      keyframes: {
        floaty: {
          '0%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
          '100%': { transform: 'translateY(0px)' }
        }
      },
      animation: {
        floaty: 'floaty 6s ease-in-out infinite'
      }
    },
  },
  plugins: [],
};
