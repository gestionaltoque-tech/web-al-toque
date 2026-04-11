import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#fbfbe2",
        primary: {
          DEFAULT: "#3A5A3A", // Stronger sage green
          container: "#5C765C",
          fixed: "#d6e7d4",
          "fixed-dim": "#bacbb8",
        },
        secondary: {
          DEFAULT: "#824c28", // Stronger earthy brown
          container: "#ffc8a6",
          fixed: "#ffdcc6",
          "fixed-dim": "#eabda0",
        },
        surface: {
          DEFAULT: "#fbfbe2",
          dim: "#dbdcc3",
          bright: "#fbfbe2",
          "container-lowest": "#ffffff",
          "container-low": "#f5f5dc",
          container: "#efefd7",
          "container-high": "#eaead1",
          "container-highest": "#e4e4cc",
          variant: "#e4e4cc",
        },
        on: {
          primary: "#ffffff",
          secondary: "#ffffff",
          "secondary-container": "#7a5840",
          surface: "#1b1d0e",
          "surface-variant": "#434842",
        },
        outline: {
          DEFAULT: "#747872",
          variant: "#c4c8c0",
        },
      },
      fontFamily: {
        display: ["var(--font-noto-serif)", "serif"],
        body: ["var(--font-jakarta)", "sans-serif"],
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
        '4xl': '2rem',
        '5xl': '3rem',
      },
      boxShadow: {
        'organic': '0 32px 64px -12px rgba(27, 29, 14, 0.05)',
      }
    },
  },
  plugins: [],
};

export default config;
