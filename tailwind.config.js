/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      fontFamily: {
        jersey10: ["Jersey 10 Charted", "serif"], // Custom name for Jersey 10 Charted
        oleoScript: ["Oleo Script", "cursive"], // Custom name for Oleo Script
        poppins: ["Poppins", "sans-serif"], // Custom name for Poppins
        silkscreen: ["Silkscreen", "sans-serif"], // Custom name for Silkscreen
        sixtyfour: ["Sixtyfour", "monospace"], //
        myCustomFont: ["Oleo+Script"],
      },
    },
  },
  plugins: [],
};
