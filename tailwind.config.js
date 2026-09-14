/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Pure white surfaces — editorial consulting-grade
        surface: '#FFFFFF',
        'surface-alt': '#FFFFFF',
        'surface-muted': '#FAFAFA',
        card: '#FFFFFF',

        // Brand dark — navbar/footer "bookend frame"
        'brand-dark': '#16241D',
        'brand-dark-light': '#1E3328',
        'brand-dark-deep': '#0E1A14',

        // Borders
        border: '#E2E8F0',
        'border-strong': '#CBD5E1',

        // High contrast text (WCAG AA compliant)
        'text-primary': '#0F172A',
        'text-secondary': '#475569',
        'text-muted': '#64748B',

        // Brand core (extracted from logo)
        primary: '#1A4D3E',
        'primary-light': '#256653',
        'primary-dark': '#0F352A',
        'primary-deep': '#09221B',

        // Accents (from the 5 pens in the logo)
        accent: '#E55B63',
        'accent-dark': '#C9454D',
        'accent-blue': '#0EA5E9',
        'accent-gold': '#F59E0B',
        'accent-sage': '#10B981',
        'accent-green': '#16A34A',

        // 5 logo pen/stripe colors
        'stripe-blue': '#7FC4D9',
        'stripe-yellow': '#E8C84A',
        'stripe-coral': '#E06B6B',
        'stripe-green': '#8FBF6B',
        'stripe-gold': '#E8A93A',

        // CTA
        'cta-bg': '#1A4D3E',
        'cta-text': '#FFFFFF',
      },
      fontFamily: {
        display: ['"Playfair Display"', '"Fraunces"', 'Georgia', 'serif'],
        tagline: ['"Playfair Display"', 'Georgia', 'serif'],
        sketch: ['"Caveat"', 'cursive'],
        sans: ['"Inter"', 'sans-serif'],
        sora: ['"Sora"', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 4px 20px -2px rgba(15, 23, 42, 0.05), 0 2px 6px -1px rgba(15, 23, 42, 0.03)',
        card: '0 10px 30px -4px rgba(15, 23, 42, 0.07), 0 4px 12px -2px rgba(15, 23, 42, 0.03)',
        lift: '0 20px 40px -8px rgba(15, 23, 42, 0.12), 0 8px 16px -4px rgba(15, 23, 42, 0.05)',
        glow: '0 0 25px -5px rgba(26, 77, 62, 0.25)',
        'glow-emerald': '0 0 30px rgba(16, 185, 129, 0.35)',
        'glow-card': '0 15px 35px -5px rgba(26, 77, 62, 0.15)',
        'mega': '0 25px 60px -12px rgba(15, 23, 42, 0.18), 0 12px 24px -8px rgba(15, 23, 42, 0.08)',
      },
      borderRadius: {
        xl2: '1.25rem',
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '30': '7.5rem',
        '32': '8rem',
        '36': '9rem',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        floatSlow: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-6px)' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.85' },
        },
        drawLine: {
          to: { strokeDashoffset: '0' },
        },
        fadeUpScale: {
          '0%': { opacity: '0', transform: 'translateY(28px) scale(0.98)' },
          '100%': { opacity: '1', transform: 'translateY(0) scale(1)' },
        },
      },
      animation: {
        float: 'float 4s ease-in-out infinite',
        floatSlow: 'floatSlow 5s ease-in-out infinite',
        pulseSubtle: 'pulseSubtle 3s ease-in-out infinite',
        drawLine: 'drawLine 1.8s cubic-bezier(0.65, 0, 0.35, 1) forwards',
        fadeUpScale: 'fadeUpScale 0.55s cubic-bezier(0.22, 1, 0.36, 1) forwards',
      },
    },
  },
  plugins: [],
};
