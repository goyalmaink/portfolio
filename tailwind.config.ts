import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx,mdx}"],

  theme: {
    extend: {
      colors: {
        beige: "#F2D4BE",

        orange: {
          DEFAULT: "#FF6A00",
          light: "#FFBA3D",
        },

        offwhite: "#FAF9F6",
        charcoal: "#111111",
      },

      fontFamily: {
        display: ['var(--font-clash)', '"Clash Display"', "sans-serif"],
        sans: ['var(--font-general)', '"General Sans"', "system-ui", "sans-serif"],
        inter: ['var(--font-inter)', '"Inter"', "system-ui", "sans-serif"],
        mono: ['ui-monospace', '"SFMono-Regular"', '"Menlo"', "monospace"],
      },

      fontSize: {
        "10xl": "clamp(4rem, 10vw, 20rem)",
        mega: "clamp(3rem, 13vw, 15rem)",
      },

      letterSpacing: {
        tightest: "-0.06em",
      },

      transitionTimingFunction: {
        expo: "cubic-bezier(0.16, 1, 0.3, 1)",
        brand: "cubic-bezier(0.65, 0.05, 0, 1)",
      },

      keyframes: {
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },

        "spin-slow": {
          from: { transform: "rotate(0deg)" },
          to: { transform: "rotate(360deg)" },
        },
      },

      animation: {
        marquee: "marquee 22s linear infinite",
        "spin-slow": "spin-slow 14s linear infinite",
      },
    },
  },

  plugins: [],
};

export default config;