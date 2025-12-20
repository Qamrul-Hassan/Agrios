/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html", "./**/*.html"],
  theme: {
    extend: {
      colors: {
        primary: "#4CAF50",
        dark: "#1f2937",
        light: "#f7f9f4",
        accent: "#f6c667",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        shadows: ["Shadows Into Light Two", "cursive"],
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1.5rem',
          sm: '2rem',
          lg: '4rem',
          xl: '5rem',
          '2xl': '6rem',
        },
      },
      minHeight: {
        '150': '600px',
      },
      height: {
        '75': '300px',
        '80': '320px',
        '90': '360px',
        '96': '384px',
        '100': '400px',
        '125': '500px',
        '150': '600px',
      },
    },
  },
  plugins: [],
}