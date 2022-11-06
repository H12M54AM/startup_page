/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  purge: {
    enabled: true,
    content: [
      "./pages/*.{ts, js, jsx, tsx}",
      "./components/**/*.{js, jsx, ts, tsx}",
      "./styles/**/*.css"
    ],
  },
  theme: {
    extend: {},
  },
  plugins: [],
}
