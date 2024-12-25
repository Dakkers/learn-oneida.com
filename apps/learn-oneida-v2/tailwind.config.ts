/** @type {import('tailwindcss').Config} */

const ohutsyaTailwindConfig = require("../../packages/ohutsya/tailwind.config");
const langComponentsTailwindConfig = require("../../packages/language-components/tailwind.config");

const config = {
  darkMode: ["class"],
  content: [
    "./src/app/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
    ...ohutsyaTailwindConfig.content.map(
      (path: string) => `../../packages/ohutsya/${path}`,
    ),
    ...langComponentsTailwindConfig.content.map(
      (path: string) => `../../packages/language-components/${path}`,
    ),
  ],
  prefix: "",
  safelist: [
    ...ohutsyaTailwindConfig.safelist,
    ...langComponentsTailwindConfig.safelist,
  ],
  theme: ohutsyaTailwindConfig.theme,
  plugins: [
    ...ohutsyaTailwindConfig.plugins,
    ...langComponentsTailwindConfig.plugins,
    require("tailwindcss-animate"),
  ],
};

// console.log(config)

module.exports = config;
