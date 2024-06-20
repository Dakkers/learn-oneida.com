/** @type {import('tailwindcss').Config} */

const ohutsyaTailwindConfig = require('../../packages/ohutsya/tailwind.config')

const config = {
  darkMode: ["class"],
  content: [
    './src/app/**/*.{js,jsx,ts,tsx}',
    './src/components/**/*.{js,jsx,ts,tsx}',
    ...ohutsyaTailwindConfig.content.map((path:string) => `../../packages/ohutsya/${path}`)
  ],
  prefix: "",
  safelist: [
    ...ohutsyaTailwindConfig.safelist,
  ],
  theme: ohutsyaTailwindConfig.theme,
  plugins: [...ohutsyaTailwindConfig.plugins, require("tailwindcss-animate")],
}

// console.log(config)

module.exports = config;
