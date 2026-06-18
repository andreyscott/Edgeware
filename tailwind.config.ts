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
        brand: {
          navy: "#0D1B3E",
          "navy-light": "#1A2F5E",
          "navy-dark": "#080F22",
          gold: "#C9A84C",
          "gold-light": "#E8C97A",
          "gold-dark": "#A8872E",
          cream: "#F9FAFB",
          "cream-dark": "#F0F2F5",
          muted: "#6B7280",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-playfair)", "Georgia", "serif"],
      },
      backgroundImage: {
        "gold-gradient": "linear-gradient(135deg, #C9A84C 0%, #E8C97A 50%, #A8872E 100%)",
        "navy-gradient": "linear-gradient(135deg, #0D1B3E 0%, #1A2F5E 100%)",
        "hero-pattern":
          "radial-gradient(ellipse 80% 50% at 50% -20%, rgba(201,168,76,0.15) 0%, transparent 60%)",
      },
      animation: {
        "fade-up": "fadeUp 0.6s ease-out forwards",
        "fade-in": "fadeIn 0.5s ease-out forwards",
        shimmer: "shimmer 2s linear infinite",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
      boxShadow: {
        gold: "0 4px 24px rgba(201, 168, 76, 0.25)",
        "gold-lg": "0 8px 40px rgba(201, 168, 76, 0.35)",
        navy: "0 4px 24px rgba(13, 27, 62, 0.15)",
        "navy-lg": "0 8px 40px rgba(13, 27, 62, 0.25)",
        card: "0 2px 16px rgba(13, 27, 62, 0.08)",
        "card-hover": "0 8px 32px rgba(13, 27, 62, 0.15)",
      },
    },
  },
  plugins: [],
};

export default config;
