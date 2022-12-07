/** @type {import('tailwindcss').Config} */

const colors = require("tailwindcss/colors");
const { fontFamily } = require("tailwindcss/defaultTheme");

const tailwindConfig = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      extend: {
        fontFamily: {
          sans: ["var(--font-inter)", ...fontFamily.sans],
          display: ["var(--font-prompt)", ...fontFamily.serif],
        },
      },
      colors: {
        white: "#FAFDFF",
        darkwhite: "#D9D9D9",
        black: "#181818",
        yellow: "#FFB70A",
        darkYellow: "#D69700",
      },
      scale: {
        101: "1.01",
        103: "1.03",
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
