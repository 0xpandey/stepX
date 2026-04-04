import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Surface hierarchy
        surface: "var(--surface)",
        "surface-dim": "var(--surface-dim)",
        "surface-bright": "var(--surface-bright)",
        "surface-container-lowest": "var(--surface-container-lowest)",
        "surface-container-low": "var(--surface-container-low)",
        "surface-container": "var(--surface-container)",
        "surface-container-high": "var(--surface-container-high)",
        "surface-container-highest": "var(--surface-container-highest)",
        "surface-variant": "var(--surface-variant)",

        // Primary colors
        primary: "var(--primary)",
        "primary-fixed": "var(--primary-fixed)",
        "primary-fixed-dim": "var(--primary-fixed-dim)",
        "primary-container": "var(--primary-container)",
        "on-primary": "var(--on-primary)",
        "on-primary-fixed": "var(--on-primary-fixed)",
        "on-primary-container": "var(--on-primary-container)",

        // Secondary colors
        secondary: "var(--secondary)",
        "secondary-fixed": "var(--secondary-fixed)",
        "secondary-fixed-dim": "var(--secondary-fixed-dim)",
        "secondary-container": "var(--secondary-container)",
        "on-secondary": "var(--on-secondary)",
        "on-secondary-fixed": "var(--on-secondary-fixed)",
        "on-secondary-container": "var(--on-secondary-container)",

        // Tertiary colors
        tertiary: "var(--tertiary)",
        "tertiary-fixed": "var(--tertiary-fixed)",
        "tertiary-fixed-dim": "var(--tertiary-fixed-dim)",
        "tertiary-container": "var(--tertiary-container)",
        "on-tertiary": "var(--on-tertiary)",
        "on-tertiary-fixed": "var(--on-tertiary-fixed)",
        "on-tertiary-container": "var(--on-tertiary-container)",

        // Background & Surface
        background: "var(--background)",
        "on-background": "var(--on-background)",
        "on-surface": "var(--on-surface)",
        "on-surface-variant": "var(--on-surface-variant)",

        // Outline colors
        outline: "var(--outline)",
        "outline-variant": "var(--outline-variant)",

        // Error colors
        error: "var(--error)",
        "error-container": "var(--error-container)",
        "on-error": "var(--on-error)",
        "on-error-container": "var(--on-error-container)",

        // Inverse colors
        "inverse-surface": "var(--inverse-surface)",
        "inverse-on-surface": "var(--inverse-on-surface)",
        "inverse-primary": "var(--inverse-primary)",

        // Surface tint
        "surface-tint": "var(--surface-tint)",
      },
      fontFamily: {
        headline: ["var(--font-space-grotesk)", "sans-serif"],
        body: ["var(--font-manrope)", "sans-serif"],
        label: ["var(--font-manrope)", "sans-serif"],
      },
      borderRadius: {
        DEFAULT: "0.125rem",
        lg: "0.25rem",
        xl: "0.5rem",
        full: "0.75rem",
      },
    },
  },
  plugins: [],
};

export default config;
