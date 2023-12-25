/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

const customColours = {
  primary: {
    //cyan
    DEFAULT: "#06b6d4", //-500
    light: "#67e8f9", //-300
    dark: "#155e75", //-800
  },
  gray: {
    dark2: "#1e293b",
    dark1: "#0f172a",
    dark0: "#020617",
    light2: "#e2e8f0",
    light1: "#f1f5f9",
    light0: "#f8fafc",
  },
};

module.exports = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      transparent: "transparent",
      primary: customColours.primary,
      gray: customColours.gray,
      state: {
        danger: "#9f1239",
        success: "#065f46",
      },
      font: {
        DEFAULT: customColours.gray.dark1,
        focus: customColours.gray.dark0,
        inactive: customColours.gray.dark2,
        dark: {
          DEFAULT: customColours.gray.light1,
          focus: customColours.gray.light0,
          inactive: customColours.gray.light2,
        },
      },
      backg: {
        DEFAULT: customColours.gray.light0,
        surface: customColours.gray.light1,
        raised: customColours.gray.light2,
        dark: {
          DEFAULT: customColours.gray.dark0,
          surface: customColours.gray.dark1,
          raised: customColours.gray.dark2,
        },
      },
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    plugins: [],
  },
};
