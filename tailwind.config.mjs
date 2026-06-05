/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        brand: {
          blue:    '#2563EB',
          cyan:    '#06B6D4',
          dark:    '#0A0E1A',
          surface: '#111827',
          border:  '#1E2D45',
          muted:   '#6B7280',
          text:    '#E5E7EB',
          white:   '#F9FAFB',
        },
        light: {
          bg:      '#F8FAFC',
          surface: '#FFFFFF',
          border:  '#E2E8F0',
          muted:   '#94A3B8',
          text:    '#334155',
          heading: '#0F172A',
        },
      },
      fontFamily: {
        display: ['Sora', 'sans-serif'],
        body:    ['DM Sans', 'sans-serif'],
        mono:    ['Space Mono', 'monospace'],
      },
      animation: {
        'pulse-slow': 'pulse 3s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%':      { transform: 'translateY(-12px)' },
        },
      },
    },
  },
  plugins: [],
};
