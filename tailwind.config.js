module.exports = {
  mode: "jit",
  content: [
    "./assets/**/*.css",
    "./components/*.{vue,js}",
    "./components/**/*.{vue,js}",
    "./pages/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./*.{vue,js,ts}",
  ],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    colors: {
      primary: "#0a0b0b",
      secondary: "#F1E7E4",
      background: "#303636",
      buttons: "#1B1F22",
    },
    extend: {
      fontFamily: {
        sans: ["Nunito", "sans-serif"],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
