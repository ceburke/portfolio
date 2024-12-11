import type { Config } from "tailwindcss";

export default {
  darkMode: 'selector',
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        'sans': ['Inter', 'sans-serif'],
        'emblema-one': ['Emblema One', 'cursive'],
      }
    },
  },
  plugins: [],
} satisfies Config;
