/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
       keyframes: {
        cursor: {
          '50%': { borderColor: 'transparent' },
        },
      },
      animation: {
        cursor: 'cursor 0.8s step-end infinite',
      },
    },
  },
  plugins: [],
  corePlugins: {
    preflight: true, // usually enabled by default
  }
}