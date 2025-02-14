import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        dayif: "#ff45",
        bg: "var(--bg)",
        bgSoft: " #2d2b42",
        text: "var(--text)",
        btn: "#3673fd",
      },
    },
  },
  plugins: [],
} satisfies Config;
