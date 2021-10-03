module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        white: "#ffffff",
        "cyan-dark": "#5ba4a4",
        "grayish-light": "#effafa",
        "grayish-lighter": "#eef6f6",
        "grayish-dark": "#7b8e8e",
        "grayish-darker": "#2c3a3a",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
