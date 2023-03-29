/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {
      colors: {
        'main-color': 'green',
        'sec-color': '#42445c',
        'accent-color': '#fb76a1',
      },
    },
    fontFamily: {
      openSans: ['Poppins', 'sans-serif'],
    },
  },
  plugins: [],
}
