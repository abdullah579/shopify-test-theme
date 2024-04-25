/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './assets/*.liquid',
    './config/*.json',
    './layout/*.liquid',
    './sections/*.liquid',
    './snippets/*.liquid',
    './templates/*.json',
    './templates/*.liquid',
    './templates/customers/*.liquid',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

