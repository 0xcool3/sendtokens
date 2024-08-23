const { nextui } = require("@nextui-org/react");
const plugin = require("tailwindcss/plugin");

module.exports = {
  content: [
    "./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
    "../../node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  darkMode: "class",
  plugins: [
    nextui(),
    plugin(function ({ addVariant, e }) {
      addVariant("focus-visible-data", ({ modifySelectors, separator }) => {
        modifySelectors(({ className }) => {
          return `.${
            e(`focus-visible-data${separator}${className}`)
          }[data-focus-visible='true']`;
        });
      });
    }),
  ],
};
