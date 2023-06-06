/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "Hanken-Grotesk": ["'Hanken Grotesk'", "sans-serif"],
      },

      backgroundImage: {
        corner: "url('./assets/corner.svg')",
      },

      colors: {
        "off-white": "hsl(0, 0%, 78%)",
        "light-red": "hsl(0, 100%, 67%)",
        "orangey-yellow": "hsl(39, 100%, 56%)",
        "green-teal": "hsl(166, 100%, 37%)",
        "cobalt-blue": "hsl(234, 85%, 45%)",
        "pale-blue": "hsl(221, 100%, 96%)",
        "light-lavender": "hsl(241, 100%, 89%)",
        "dark-gray-blue": "hsl(224, 30%, 27%)",
        // Gradients
        "light-slate-blue": "hsl(252, 100%, 67%)", // background
        "light-royal-blue": "hsl(241, 81%, 54%)", //background
        "violet-blue": "hsla(256, 72%, 46%, 1)", // circle
        "persian-blue": "hsla(241, 72%, 46%, 0)", // circle
      },
    },
  },
  plugins: [],
};
