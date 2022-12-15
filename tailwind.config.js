const plugin = require("tailwindcss/plugin");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [
    require("flowbite/plugin"),
    plugin(function ({ addVariant }) {
      addVariant("group-with-foo", ":merge(.group).foo &"); // custom CSS
      addVariant("group-no-foo", ":merge(.group):not(.foo) &");
    }),
  ],
};
