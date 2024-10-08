/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.html',
    './src/**/*.cjs',
    './src/**/*.js',
    './src/**/*.vue',
    './src/**/*.jsx',],
  theme: {
    extend: {},
  },
  plugins: [ 
    require('tailwindcss'),
    require('autoprefixer'),],
}

