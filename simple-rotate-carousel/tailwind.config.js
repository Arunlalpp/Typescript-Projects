/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {
        shimmer: "animate-shimmer 1s linear",
      },
      keyframes: {
        "animate-shimmer": {
          "0%": { opacity: 0, transform: "translateX(50%)" },
          "100%": { opacity: 1, transform: "translateX(-100%)" },
        },
      },
    },

    plugins: [],
  },
};
