module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Lato', 'sans-serif'],
        'header': ['Cormorant Garamond', 'serif'],
      },
      colors: {
        theme: {
          'lightest': '#FFFBF8',
          'light': '#FDF5EF',
          'text': '#6B8181',
          default: '#FFE8D7',
          'dark': '#A8B699',
          'gray': '#747474',
          'light-gray': '#484848'
        }
      },
      letterSpacing: {
        widestest: '0.5em',
      }
    },
  },
  plugins: [],
}
