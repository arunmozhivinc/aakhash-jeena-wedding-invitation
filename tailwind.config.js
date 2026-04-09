/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        blush: '#f9d7de',
        peach: '#ffd7c2',
        cream: '#fff7ef',
        rosewood: '#7f5066',
      },
      fontFamily: {
        heading: ['"Playfair Display"', 'serif'],
        body: ['Poppins', 'sans-serif'],
      },
      boxShadow: {
        glass: '0 10px 35px rgba(127, 80, 102, 0.15)',
      },
    },
  },
  plugins: [],
}

