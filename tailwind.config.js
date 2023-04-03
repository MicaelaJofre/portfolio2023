/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx}', './pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'yellow-select': '#f9dc5c',
        'white-bg': '#f4f4f4',
        'gray-icon': '#918e8e'
      },
      height: {
        'section-layout': '30em'
      },
      gridTemplateColumns: {
        'about-col': 'repeat(auto-fill, minmax(40px, 1fr))',
        'portfolio-col': 'repeat(auto-fill, minmax(200px, 1fr))'
      },
      backgroundImage: {
        'body-texture': "url('/image/background/bg.jpg')"
      }
    }
  },
  plugins: []
}
