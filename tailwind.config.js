/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx}', './pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'yellow-select': '#f9dc5c',
        'white-bg': '#f7f7f7',
        'gray-icon': '#918e8e'
      },
      height: {
        'section-layout': '30em'
      },
      gridTemplateColumns: {
        'about-col': 'repeat(auto-fill, minmax(40px, 1fr))'
      }
    }
  },
  plugins: []
}
