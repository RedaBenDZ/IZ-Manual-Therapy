import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#F4F1EE",
        foreground: "#2C3A3F",
        accent: "#CBD9CE",
        "accent-soft": "#D9C9B5",
        cta: "#6697A6",
        error: "#DC2626",
        success: "#16A34A",
      },
    },
  },
  plugins: [],
};

export default config;
