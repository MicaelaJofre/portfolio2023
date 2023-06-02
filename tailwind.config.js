/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx}', './pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'yellow-select': 'rgba(245, 158, 11, .8)',
        'white-bg': '#f9f9f9',
        'gray-icon': '#181616',
        'black-bg': 'rgb(0 0 0 / 42%)'
      },
      height: {
        'section-layout': '30em'
      },
      gridTemplateColumns: {
        'about-col': 'repeat(auto-fill, minmax(40px, 1fr))',
        'portfolio-col': 'repeat(auto-fill, minmax(200px, 1fr))',
        'contact-2x1': 'repeat(auto-fill, minmax(170px, 1fr))',
        'contact-lg': 'repeat(auto-fill, minmax(160px, 1fr))',
        'contact-md': 'repeat(auto-fill, minmax(120px, 1fr))'
      },
      minHeight: {
        section: '80%',
        modal: '70%',
        lgSection: '80vh'
      },
      width: {
        section: '50vw'
      },
      screens: {
        '2x1': '1800px',
        xs: '400px'
      }
    }
  },
  plugins: []
}
