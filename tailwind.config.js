/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{html,js}',
    './public/index.html',   
    './src/**/*.jsx',
    "./node_modules/tw-elements/js/**/*.js"
  ],
  theme: {
    extend: {colors:{"custom-primary":"#FE7A36", "custom-accent":"#686995", "custom-accent-hover":"#445A7E","custom-bg": "#111827", "custom-bg-light" : "#244A64", "custom-text": "#EBFBFF"}},
    
  },
  plugins: [
  ],
  safelist: [
    '!duration-[0ms]',
    '!delay-[0ms]',
  ]
}

