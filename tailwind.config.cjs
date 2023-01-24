/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{ts, tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#704420',
        'secundary': '#D7812E',
        'body': '#DECEB4',
      },
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
}
