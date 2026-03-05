import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "brand-pink": "#D4317A",
        "brand-magenta": "#E91E8C",
        "brand-rose": "#C2185B",
        "brand-purple": "#7B1FA2",
        "brand-violet": "#6A0080",
        "brand-mint": "#80DEEA",
        "brand-teal": "#4DD0E1",
        "brand-cream": "#FDF8FF",
        plum: {
          deep: "#0C0818",
          dark: "#1a0a2e",
          mid: "#2d0845",
          light: "#4a1272",
        },
      },
      fontFamily: {
        playfair: ["var(--font-playfair)", "Georgia", "serif"],
        sans: ["var(--font-dm-sans)", "system-ui", "sans-serif"],
      },
      keyframes: {
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
        fadeInUp: {
          from: { opacity: "0", transform: "translateY(40px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        scaleIn: {
          from: { opacity: "0", transform: "scale(0.92)" },
          to: { opacity: "1", transform: "scale(1)" },
        },
      },
      animation: {
        marquee: "marquee 30s linear infinite",
        "marquee-fast": "marquee 18s linear infinite",
        fadeInUp: "fadeInUp 0.9s ease-out forwards",
        float: "float 4s ease-in-out infinite",
        shimmer: "shimmer 3s ease-in-out infinite",
        scaleIn: "scaleIn 0.6s ease-out forwards",
      },
      backgroundImage: {
        "pink-gradient":
          "linear-gradient(135deg, #D4317A 0%, #E91E8C 50%, #C2185B 100%)",
        "plum-gradient":
          "linear-gradient(135deg, #0C0818 0%, #1a0a2e 50%, #2d0845 100%)",
        "brand-radial":
          "radial-gradient(ellipse at top, #2d0845 0%, #0C0818 70%)",
      },
    },
  },
  plugins: [],
};
export default config;
