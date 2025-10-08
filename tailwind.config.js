/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        dark: {
          50: '#f1f5f9',
          100: '#e2e8f0',
          200: '#cbd5e1',
          300: '#94a3b8',
          400: '#64748b',
          500: '#475569',
          600: '#334155',
          700: '#1e293b',
          800: '#0f172a',
          900: '#020617',
        },
        purple: {
          50: '#faf5ff',
          100: '#f3e8ff',
          200: '#e9d5ff',
          300: '#d8b4fe',
          400: '#c084fc',
          500: '#a855f7',
          600: '#9333ea',
          700: '#8b5cf6',
          800: '#7c3aed',
          900: '#6b21a8',
        }
      },
      animation: {
        'theme-switch': 'theme-switch 0.5s ease-in-out',
      },
      keyframes: {
        'theme-switch': {
          '0%': { transform: 'scale(1) rotate(0deg)' },
          '50%': { transform: 'scale(1.1) rotate(180deg)' },
          '100%': { transform: 'scale(1) rotate(360deg)' },
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1.125rem' }],
        'sm': ['0.875rem', { lineHeight: '1.3125rem' }],
        'base': ['1rem', { lineHeight: '1.5rem' }],
        'lg': ['1.125rem', { lineHeight: '1.6875rem' }],
        'xl': ['1.25rem', { lineHeight: '1.875rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.7rem' }],
        '5xl': ['3rem', { lineHeight: '3.6rem' }],
        '6xl': ['3.75rem', { lineHeight: '4.5rem' }],
        '7xl': ['4.5rem', { lineHeight: '5.4rem' }],
        '8xl': ['6rem', { lineHeight: '7.2rem' }],
        '9xl': ['8rem', { lineHeight: '9.6rem' }],
      },
      lineHeight: {
        'tight': '1.2',
        'snug': '1.375',
        'normal': '1.5',
        'relaxed': '1.625',
        'loose': '2',
      },
      letterSpacing: {
        'tighter': '-0.05em',
        'tight': '-0.025em',
        'normal': '0',
        'wide': '0.025em',
        'wider': '0.05em',
        'widest': '0.1em',
      },
    },
  },
  plugins: [],
};