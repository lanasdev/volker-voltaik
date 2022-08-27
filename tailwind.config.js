module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    
    FontFace: {
      "Inter": {
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
      "Promt": {
        fontFamily: "Promt",
        src: "url('/fonts/Promt-SemiBold.ttf') format('ttf')",
        fontWeight: 600,
        fontStyle: "normal",
      },
    },
    fontFamily: {
      'sans': ['Inter', 'sans-serif'],
      'display': ['Promt', 'display'],
    },

    extend: {
      colors: {
        black: "#1b1b1b",
        white: "#fff",
        yellow: "#FFB70A",
      },
    },
  },
  plugins: [],
};
