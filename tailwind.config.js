/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      color1: "#44749d",
      color2: "#c6d4e1",
      color3: "#ffffff",
      color4: "#ebe7e0",
      color5: "#bdb8ad",
      color6: "#000000",
      color7: "#caff42",
      color8: "#0f684b",
      color9: "#00a8c6",
      color10: "#f5f5f5",
    },

    extend: {
      fontFamily: {
        display: ["Capriola", "sans-serif"]
      }
    }
  },
  plugins: []
};
