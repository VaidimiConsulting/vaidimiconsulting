/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Base surfaces
        surface: '#FDFBF7',        // warm cream page background
        'surface-alt': '#F5F1E8',  // slightly deeper cream for alternating sections
        card: '#FFFFFF',

        // Borders
        border: '#E5E1D8',
        'border-strong': '#C9C4B6',

        // Text
        'text-primary': '#2D4A3E',   // deep forest green — headings
        'text-secondary': '#5A5A56', // charcoal — body copy
        'text-muted': '#8A8880',

        // Brand core
        primary: '#2D4A3E',
        'primary-light': '#3F634F',
        'primary-dark': '#1E332A',

        // Accents (from the 5 hand-drawn pens in the logo)
        accent: '#E06B6B',        // coral — primary CTA / "Services"
        'accent-dark': '#C24E4E',
        'accent-blue': '#7FC4D9', // "Sector"
        'accent-gold': '#E8A93A', // "Insights"
        'accent-sage': '#A8D5A0', // "Who We Are"
        'accent-green': '#639922',// "What We Do"

        // CTA
        'cta-bg': '#2D4A3E',
        'cta-text': '#FDFBF7',
      },
      fontFamily: {
        display: ['"Fraunces"', 'serif'],
        script: ['"Caveat"', 'cursive'],
        sans: ['"Inter"', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 6px 20px rgba(45, 74, 62, 0.10)',
        card: '0 8px 30px rgba(45, 74, 62, 0.12)',
        lift: '0 16px 40px rgba(45, 74, 62, 0.18)',
      },
      borderRadius: {
        xl2: '1.25rem',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        floatSlow: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
      },
      animation: {
        float: 'float 3.4s ease-in-out infinite',
        floatSlow: 'floatSlow 4.2s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
