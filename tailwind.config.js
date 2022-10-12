/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
    content: ["src/**/*.{ts,tsx}"],
    theme: {
        fontFamily: {
            sans: ['iranyekan', ...defaultTheme.fontFamily.sans],
        },
        extend: {},
    },
    plugins: [],
};
