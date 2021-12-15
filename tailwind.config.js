module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  // purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  // mode: 'jit',
  darkMode: false,
  theme: {
    extend: {
      colors: {
        primary: "#76b6b0",
      },
      maxWidth: {
        "90%": "90%",
      },
      minHeight: {
        "25vh": "25vh",
        "50vh": "50vh",
        "75vh": "75vh",
        "100vh": "100vh",
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
};
