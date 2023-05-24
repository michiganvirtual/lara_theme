/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}", "./src/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        heading: ["RNS Sanz"],
        body: ["Montserrat", "Calibri"],
      },
      colors: {
        "deep-teal": "#093c44",
        "dark-teal": "#115e6e",
        "light-teal": "#2f8d98",
        green: "#b5cd34",
        orange: "#f7941e",
        "dark-gray": "#414042",
        "light-gray": "#6d6e71",
        "ada-green": "#6a7f17",
        "ada-orange": "#ac6610",
        "lara-orange": "#f37620",
        "lara-blue": "#1c4693",
        black: "#161818",
        body: "#353535",
      },
      borderWidth: {
        10: "10px",
      },
    },
    listStyleType: {
      none: "none",
      disc: "disc",
      decimal: "decimal",
      square: "square",
      roman: "upper-roman",
      "lower-roman": "lower-roman",
      circle: "circle",
    },
  },
  plugins: [],
};
