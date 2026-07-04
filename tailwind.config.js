/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: '#14213D',
          50: '#F1F4F9',
          100: '#DCE2EE',
          200: '#B7C2D9',
          300: '#8C9DBE',
          400: '#5E709C',
          500: '#3C4F7C',
          600: '#283A60',
          700: '#1D2C4A',
          800: '#14213D',
          900: '#0B1220',
          950: '#070B14'
        },
        paper: {
          DEFAULT: '#FAFAF7',
          dim: '#F2F1EC'
        },
        brand: {
          DEFAULT: 'var(--brand-500)',
          50: 'var(--brand-50)',
          100: 'var(--brand-100)',
          200: 'var(--brand-200)',
          300: 'var(--brand-300)',
          400: 'var(--brand-400)',
          500: 'var(--brand-500)',
          600: 'var(--brand-600)',
          700: 'var(--brand-700)'
        },
        amber: {
          DEFAULT: '#E8A33D'
        }
      },
      fontFamily: {
        display: ['"Fraunces"', 'serif'],
        body: ['"Plus Jakarta Sans"', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'monospace']
      },
      boxShadow: {
        card: '0 1px 2px rgba(20,33,61,0.04), 0 8px 24px -8px rgba(20,33,61,0.12)',
        lift: '0 12px 40px -12px rgba(20,33,61,0.25)',
        glass: '0 8px 32px rgba(20,33,61,0.18)'
      },
      borderRadius: {
        xl2: '1.25rem'
      },
      keyframes: {
        scanline: {
          '0%': { transform: 'translateY(-2%)', opacity: '0' },
          '10%': { opacity: '1' },
          '90%': { opacity: '1' },
          '100%': { transform: 'translateY(102%)', opacity: '0' }
        },
        countup: {
          '0%': { opacity: '0', transform: 'translateY(4px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        },
        floaty: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' }
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(14px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' }
        }
      },
      animation: {
        scanline: 'scanline 2.6s ease-in-out infinite',
        countup: 'countup 0.5s ease-out forwards',
        floaty: 'floaty 6s ease-in-out infinite',
        fadeUp: 'fadeUp 0.6s ease-out forwards',
        shimmer: 'shimmer 2.5s linear infinite'
      }
    }
  },
  plugins: []
}
