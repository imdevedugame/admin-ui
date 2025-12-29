/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: 'var(--color-primary)',
        'gray-02': 'var(--color-gray-02)',
        'gray-05': 'var(--color-gray-05)',
        'special-mainBg': 'var(--color-special-mainBg)',
      }
    },
  },
  plugins: [],
}
