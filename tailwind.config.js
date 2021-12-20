module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  // mode: 'jit',
  darkMode: false,
  theme: {
    extend: {
      colors: {
        primary: {
          light: "#81c1e1",
          DEFAULT: "#1092b2",
          dark: "#02293e",
        },
        secondary: {
          DEFAULT: "#FE7D1E",
        },
      },
      fontFamily: {
        Montserrat: ["Montserrat"],
      },
      maxWidth: {
        "90%": "90%",
      },
      minWidth: {
        dropdown: "150px",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
  important: true,
};
