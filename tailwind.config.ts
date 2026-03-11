import type { Config } from "tailwindcss";
const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ["Sora", "sans-serif"],
        sans:    ["DM Sans", "sans-serif"],
        mono:    ["JetBrains Mono", "monospace"],
      },
      colors: {
        brand: {
          50:  "#f0fdf4",
          100: "#dcfce7",
          200: "#bbf7d0",
          300: "#86efac",
          400: "#4ade80",
          500: "#22c55e",
          600: "#16a34a",
          700: "#15803d",
          800: "#166534",
          900: "#14532d",
        },
        dark: {
          50:  "#f8fafc",
          100: "#f1f5f9",
          200: "#e2e8f0",
          300: "#cbd5e1",
          700: "#334155",
          800: "#1e293b",
          900: "#0f172a",
        },
      },
      boxShadow: {
        brand: "0 8px 30px rgba(21,128,61,0.25)",
        "brand-lg": "0 16px 48px rgba(21,128,61,0.3)",
        card: "0 2px 16px rgba(0,0,0,0.07)",
        "card-hover": "0 8px 32px rgba(0,0,0,0.12)",
        phone: "0 40px 100px rgba(0,0,0,0.35), 0 0 0 1px rgba(255,255,255,0.05) inset",
      },
      animation: {
        marquee: "marquee 32s linear infinite",
        float:   "float 5s ease-in-out infinite",
        "ping-slow": "ping-slow 2s ease-out infinite",
        "fade-up": "fade-up 0.55s ease-out forwards",
        "bounce-dot": "bounce-dot 1.2s ease-in-out infinite",
      },
      keyframes: {
        marquee:  { "0%":{"transform":"translateX(0)"},  "100%":{"transform":"translateX(-50%)"}},
        float:    { "0%,100%":{"transform":"translateY(0)"}, "50%":{"transform":"translateY(-14px)"}},
        "ping-slow":{ "0%":{"transform":"scale(1)","opacity":"0.7"}, "100%":{"transform":"scale(1.6)","opacity":"0"}},
        "fade-up":{ "from":{"opacity":"0","transform":"translateY(24px)"}, "to":{"opacity":"1","transform":"none"}},
        "bounce-dot":{ "0%,80%,100%":{"transform":"scale(0.6)","opacity":"0.4"}, "40%":{"transform":"scale(1)","opacity":"1"}},
      },
    },
  },
  plugins: [],
};
export default config;
