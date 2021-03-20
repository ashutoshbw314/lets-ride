module.exports = {
  purge: ["./src/**/*.jsx", "./index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: theme => ({
       'hero-image': "url('/img/roads-arial.jpg')",
      })
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/forms')],
}
