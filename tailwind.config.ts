import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        cinzel: ["var(--font-cinzel)", "serif"],
        "cinzel-deco": ["var(--font-cinzel-deco)", "serif"],
        baskerville: ["var(--font-baskerville)", "serif"],
      },
      colors: {
        negro: "#0a0a0a",
        negro2: "#111111",
        rojo: "#c0392b",
        "rojo-fuego": "#e74c3c",
        naranja: "#e67e22",
        dorado: "#f1c40f",
        dorado2: "#d4a017",
        teal: "#1a6b73",
        "teal-claro": "#2d9da8",
        crema: "#f5f0e8",
      },
      animation: {
        "halo-glow": "haloGlow 3s ease-in-out infinite alternate",
        "fade-in": "fadeIn 0.4s ease forwards",
        "slide-in": "slideIn 0.35s cubic-bezier(0.4,0,0.2,1) forwards",
        "slide-out": "slideOut 0.3s cubic-bezier(0.4,0,0.2,1) forwards",
        "badge-pop": "badgePop 0.3s cubic-bezier(0.34,1.56,0.64,1) forwards",
      },
      keyframes: {
        haloGlow: {
          from: { boxShadow: "0 0 20px #f1c40f, 0 0 40px rgba(241,196,15,0.3)" },
          to: { boxShadow: "0 0 30px #f1c40f, 0 0 70px rgba(241,196,15,0.5), 0 0 100px rgba(241,196,15,0.15)" },
        },
        fadeIn: {
          from: { opacity: "0", transform: "translateY(12px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        slideIn: {
          from: { transform: "translateX(100%)" },
          to: { transform: "translateX(0)" },
        },
        slideOut: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(100%)" },
        },
        badgePop: {
          from: { transform: "scale(0)" },
          to: { transform: "scale(1)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
