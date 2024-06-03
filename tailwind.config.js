/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'dark-10': '#121214',
        'dark-20': '#F3F7FF',
        'dark-30': '#FFFFFF',
        'brand-color': '#7CA2F4',
      },
      fontFamily: {
        archivo: ['Archivo', 'sans-serif'],
      },
      backgroundImage: {
        'hero-bg': "url('./src/assets/img/hero-bg.svg')",
      },
      maxWidth: {
        '1xl': '1216px',
      },
    },
  },
  plugins: [],
}
