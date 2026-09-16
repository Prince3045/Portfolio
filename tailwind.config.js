/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {
      colors: {
        background: {
          DEFAULT: 'rgb(var(--color-bg-primary) / <alpha-value>)',
          secondary: 'rgb(var(--color-bg-secondary) / <alpha-value>)',
          tertiary: 'rgb(var(--color-bg-tertiary) / <alpha-value>)',
        },
        surface: {
          DEFAULT: 'rgb(var(--color-surface) / <alpha-value>)',
          elevated: 'rgb(var(--color-surface-elevated) / <alpha-value>)',
          highlight: 'rgb(var(--color-surface-highlight) / <alpha-value>)',
        },
        card: {
          DEFAULT: 'rgb(var(--color-card) / <alpha-value>)',
          hover: 'rgb(var(--color-card-hover) / <alpha-value>)',
          border: 'var(--color-border-subtle)',
        },
        border: {
          subtle: 'var(--color-border-subtle)',
          muted: 'var(--color-border-muted)',
          strong: 'var(--color-border-strong)',
        },
        text: {
          primary: '#f8fafc',
          secondary: '#94a3b8',
          muted: '#64748b',
          dim: '#475569',
        },
        brand: {
          DEFAULT: 'rgb(var(--color-brand) / <alpha-value>)',
          light: 'rgb(var(--color-brand-light) / <alpha-value>)',
          dark: 'rgb(var(--color-brand-dark) / <alpha-value>)',
          glow: 'var(--color-brand-glow)',
        },
        accent: {
          blue: '#3b82f6',
          cyan: 'rgb(var(--color-accent-cyan) / <alpha-value>)',
          emerald: '#10b981',
          amber: '#f59e0b',
        },
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', 'monospace'],
      },
      boxShadow: {
        'soft-sm': '0 1px 2px 0 rgba(0, 0, 0, 0.4)',
        'soft-md': '0 4px 6px -1px rgba(0, 0, 0, 0.5), 0 2px 4px -2px rgba(0, 0, 0, 0.5)',
        'soft-lg': '0 10px 15px -3px rgba(0, 0, 0, 0.6), 0 4px 6px -4px rgba(0, 0, 0, 0.6)',
        'card-glow': '0 0 0 1px rgba(255, 255, 255, 0.08), 0 8px 24px -4px rgba(0, 0, 0, 0.6)',
      },
      borderRadius: {
        'xs': '4px',
        'sm': '6px',
        'md': '10px',
        'lg': '14px',
        'xl': '18px',
      },
    },
  },
  plugins: [],
};
