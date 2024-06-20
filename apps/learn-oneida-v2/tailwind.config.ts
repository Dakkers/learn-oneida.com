/** @type {import('tailwindcss').Config} */

const breakpointsVariants = ['sm', 'md', 'lg', 'xl']

module.exports = {
  darkMode: ["class"],
  content: [
    './src/app/**/*.{js,jsx,ts,tsx}',
    './src/components/**/*.{js,jsx,ts,tsx}',
  ],
  prefix: "",
  safelist: [
  ],
  theme: {
  },
  plugins: [require("tailwindcss-animate")],
}
