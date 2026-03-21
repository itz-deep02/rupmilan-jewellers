import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ivory: {
          DEFAULT: "#FBF6EE",
          100: "#F0E6D0",
          200: "#EDE0C8",
          300: "#E8D9BE",
        },
        brand: {
          heading: "#1A120A",
          body: "#5C4830",
          muted: "#7A6048",
          gold: "#A0732A",
          "gold-light": "#B08040",
          "gold-muted": "#7A6048",
        },
        gold: {
          50: "#FFF9F0",
          100: "#F5E6C8",
          200: "#E8D4A0",
          300: "#D4B878",
          400: "#C9A84C",
          500: "#A0732A",
          600: "#8B6424",
          700: "#6E4F1C",
          800: "#503A14",
          900: "#33250C",
        },
      },
      fontFamily: {
        brand: ["var(--font-cormorant)", "Georgia", "serif"],
        serif: ["var(--font-playfair)", "Georgia", "serif"],
        sans: ["var(--font-jost)", "system-ui", "sans-serif"],
      },
      borderColor: {
        DEFAULT: "rgba(160, 115, 42, 0.20)",
      },
      keyframes: {
        "fade-in-up": {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "pulse-ring": {
          "0%": { transform: "scale(1)", opacity: "0.8" },
          "70%": { transform: "scale(1.35)", opacity: "0" },
          "100%": { transform: "scale(1.35)", opacity: "0" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% center" },
          "100%": { backgroundPosition: "200% center" },
        },
        "scroll-x": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        "fade-in-up": "fade-in-up 0.6s ease-out forwards",
        "fade-in": "fade-in 0.5s ease-out forwards",
        "pulse-ring": "pulse-ring 2s cubic-bezier(0.455, 0.03, 0.515, 0.955) infinite",
        shimmer: "shimmer 3s linear infinite",
        "scroll-x": "scroll-x 45s linear infinite",
      },
    },
  },
  plugins: [],
};
export default config;
