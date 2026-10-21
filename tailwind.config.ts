import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        void: "#171719",
        surface: "#242226",
        "surface-raised": "#2c292d",
        ink: {
          DEFAULT: "#F4EFE8",
          muted: "#B4AAA7",
          faint: "#817875",
        },
        emerald: {
          DEFAULT: "#C49A63",
          deep: "#78563D",
          glow: "#E2BD87",
        },
        plum: "#9C7588",
        line: "rgba(255,255,255,0.13)",
        "line-strong": "rgba(255,255,255,0.2)",
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      fontSize: {
        "display-xl": ["clamp(3.25rem, 8vw, 7.5rem)", { lineHeight: "0.98", letterSpacing: "-0.055em" }],
        "display-lg": ["clamp(2.5rem, 6vw, 5.25rem)", { lineHeight: "1.02", letterSpacing: "-0.045em" }],
        "display-md": ["clamp(1.9rem, 4vw, 3.25rem)", { lineHeight: "1.1", letterSpacing: "-0.035em" }],
      },
      keyframes: {
        marquee: { "0%": { transform: "translateX(0)" }, "100%": { transform: "translateX(-50%)" } },
      },
      animation: {
        marquee: "marquee 36s linear infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
