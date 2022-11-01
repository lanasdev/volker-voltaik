/** @type {import('tailwindcss').Config} */

const colors = require("tailwindcss/colors");

const tailwindConfig = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    FontFace: {
      Inter: {
        fontFamily: "Inter",
        src: "url('/fonts/Inter-Regular.woff2') format('woff2')",
        fontWeight: 400,
        fontStyle: "normal",
      },
      "Inter-SemiBold": {
        fontFamily: "Inter",
        src: "url('/fonts/Inter-SemiBold.woff2') format('woff2')",
        fontWeight: 600,
        fontStyle: "normal",
      },
      Promt: {
        fontFamily: "Promt",
        src: "url('/fonts/Promt-SemiBold.ttf') format('ttf')",
        fontWeight: 600,
        fontStyle: "normal",
      },
    },
    fontFamily: {
      sans: ["Inter", "sans-serif"],
      display: ["Promt", "display"],
    },

    extend: {
      colors: {
        white: "#FAFDFF",
        darkwhite: "#D9D9D9",
        black: "#181818",
        yellow: "#FFB70A",
        darkYellow: "#D69700",
      },
      spacing: {
        "90screen": "90vh",
        "50screen": "50vh",
      },
      aspectRatio: {
        golden: [1, 1.618],
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/line-clamp"),
  ],
};

module.exports = tailwindConfig;
