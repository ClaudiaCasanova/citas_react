module.exports = {
  purge: ["index.html","./src/**/*.jsx"], //elimina los estilos que no se esten usando,
  darkMode: 'media', //or 'media' or 'class'
  theme: {
    extend: {},
  },
  content: [
    "./index.html",
    "./src/**/*.{jsx,tsx}",
  ],
  variants: {
    extend: {},
  },
  plugins: [],
}
