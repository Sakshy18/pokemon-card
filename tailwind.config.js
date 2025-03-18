/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'pixel-forest': "url('/src/assets/forest_bg.jpg')",
        'pixel-mountain': "url('/src/assets/sky_bg.jpg')"
      },
    },
  },
  plugins: [],
};


