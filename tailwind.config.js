/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors')

export default {
  content: [
    "./index.css",
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      // white: colors.white,
      white: "#FFFFFF",
      gray: colors.slate,
      purple: colors.violet,
      yellow: colors.amber,
      pink: colors.fuchsia,
      red: "#FF3737",
      green: "#00DD40",
      greyText: "#7d7d7d",
      primary: "#BE6E46",
      secondary: "#CDE7B0",
      tertiary: "#A3BFA8",
      fourth: "#7286A0",
      background: "#E5E5E5",
    },
  },
  plugins: [],
}


// BE6E46
// CDE7B0
// A3BFA8
// 7286A0
// 59594A

/*

colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.slate,
      green: colors.emerald,
      purple: colors.violet,
      yellow: colors.amber,
      pink: colors.fuchsia,
      tan: "#f0ece2",
      tan2: "#dfd3c3",
      brown: "#c7b198",
      darkTeal: "#596e79",
      primary: "",
      secondary: "",
      tertiary: ""
    },

*/