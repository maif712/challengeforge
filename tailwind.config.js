/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark-text-secondry' : "#cdcdcd",
        'dark': '#1b1b1b',
        'dark-footer': "#313131",
        'border-secondry': "#696969",
        'filter-input-dark' : "#343434",
        'border-primary': "#858585",
        'modal-bg-dark': "#222222",
        'hero-title' : "#ced7dc",
        'background-secondry' : "#f9f9fb",
        'clr-secondry' : "#4e4e4e",
        'chagllenge-bg-dark' : "#1d2227"
      },
      screens: {
        'betterhover': {'raw': '(hover: hover)'},
    }
    },
  },
  plugins: [],
  darkMode: "selector"
}