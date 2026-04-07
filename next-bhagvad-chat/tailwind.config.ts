import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        krishna: {
          primary: "#1E3A8A",
          accent: "#F59E0B",
          cream: "#F9FAFB",
          aiBubble: "#EEF2FF",
        },
      },
      boxShadow: {
        soft: "0 8px 30px rgba(30, 58, 138, 0.08)",
      },
      borderRadius: {
        xl2: "1.25rem",
      },
    },
  },
  plugins: [],
};

export default config;
