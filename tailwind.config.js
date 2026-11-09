/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gray: {
          200: "#D5DAE1"
        },
        black: {
          DEFAULT: "#000",
          500: "#1D2235"
        },
        blue: {
          500: "#2b77e7"
        },
        mint: "#B8F5D4",
        ink: "#0B0B0B",
      },
      fontFamily: {
        worksans: ["Work Sans", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
        display: ["Syne", "sans-serif"],
        agency: ["Space Grotesk", "sans-serif"],
      },
      boxShadow: {
        card: '0px 1px 2px 0px rgba(0, 0, 0, 0.05)'
      }
    },
  },
  plugins: [],
}

