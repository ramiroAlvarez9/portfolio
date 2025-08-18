/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,vue}", // Adjust based on your project structure
  ],
  theme: {
    extend: {
      colors: {
        "window-content": "var(--window-content)",
      },
    },
  },
  plugins: [],
};
