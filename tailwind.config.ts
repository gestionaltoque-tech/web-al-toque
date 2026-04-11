import type { Config } from "tailwindcss";

/** 
 *  TEMAS DE MARCA - CAMBIO RÁPIDO
 *  Para cambiar el color de toda la web, simplemente cambia la constante 'activeTheme' 
 *  por el tema que prefieras (RED o GREEN).
 */

const RED_THEME = {
  primary: "#C41E3A",
  primaryContainer: "#9B1B30",
  secondary: "#1A1A1A",
  surfaceDark: "#121212",
  onSurfaceDark: "#fbfbe2",
};

const GREEN_THEME = {
  primary: "#3A5A3A",
  primaryContainer: "#5C765C",
  secondary: "#824c28",
  surfaceDark: "#dbdcc3",
  onSurfaceDark: "#1b1d0e",
};

// --- ELIGE EL TEMA AQUÍ ---
const activeTheme = RED_THEME; 
// --------------------------

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
          DEFAULT: activeTheme.primary,
          container: activeTheme.primaryContainer,
          fixed: "#FFE4E6",
          "fixed-dim": "#FECDD3",
        },
        secondary: {
          DEFAULT: activeTheme.secondary,
          container: "#333333",
          fixed: "#4A4A4A",
          "fixed-dim": "#2D2D2D",
        },
        surface: {
          DEFAULT: "#fbfbe2",
          dim: "#dbdcc3",
          bright: "#fbfbe2",
          dark: activeTheme.surfaceDark,
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
          "secondary-container": "#fbfbe2",
          surface: "#1b1d0e",
          "surface-variant": "#434842",
          "surface-dark": activeTheme.onSurfaceDark,
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
