/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        bg: "#030712",
        card: "#111827",
        "card-light": "#1a2333",
        primary: "#3B82F6",
        secondary: "#06B6D4",
        accent: "#8B5CF6",
        text: "#FFFFFF",
        muted: "#9CA3AF",
        border: "rgba(255,255,255,0.08)",
      },
      fontFamily: {
        heading: ["Poppins", "sans-serif"],
        body: ["Inter", "sans-serif"],
      },
      backgroundImage: {
        "gradient-primary": "linear-gradient(135deg, #3B82F6 0%, #06B6D4 50%, #8B5CF6 100%)",
        "gradient-radial": "radial-gradient(ellipse at center, var(--tw-gradient-stops))",
        "gradient-mesh":
          "radial-gradient(at 20% 20%, rgba(59,130,246,0.15) 0px, transparent 50%), radial-gradient(at 80% 0%, rgba(139,92,246,0.15) 0px, transparent 50%), radial-gradient(at 0% 50%, rgba(6,182,212,0.1) 0px, transparent 50%), radial-gradient(at 80% 80%, rgba(59,130,246,0.1) 0px, transparent 50%)",
      },
      boxShadow: {
        glow: "0 0 40px rgba(59,130,246,0.25)",
        "glow-lg": "0 0 80px rgba(59,130,246,0.3)",
        "glow-purple": "0 0 40px rgba(139,92,246,0.25)",
        card: "0 8px 32px rgba(0,0,0,0.4)",
        "card-hover": "0 20px 60px rgba(0,0,0,0.5)",
      },
      animation: {
        blob: "blob 12s infinite",
        float: "float 6s ease-in-out infinite",
        "float-slow": "float 10s ease-in-out infinite",
        "spin-slow": "spin 20s linear infinite",
        marquee: "marquee 30s linear infinite",
        shimmer: "shimmer 2.5s linear infinite",
      },
      keyframes: {
        blob: {
          "0%, 100%": { transform: "translate(0px, 0px) scale(1)" },
          "33%": { transform: "translate(30px, -50px) scale(1.1)" },
          "66%": { transform: "translate(-20px, 20px) scale(0.9)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-18px)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-1000px 0" },
          "100%": { backgroundPosition: "1000px 0" },
        },
      },
      backdropBlur: {
        xs: "2px",
      },
    },
  },
  plugins: [],
};
