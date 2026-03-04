/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Design System from deliverable 08
        charcoal: '#1A1A1A',      // Primary: text, backgrounds, buttons
        paper: '#F5F5F3',         // Secondary: page backgrounds, card surfaces
        clay: '#C17F59',          // Accent: CTAs, highlights, hover states
        'film-grey': '#8C8C8C',   // Functional: secondary text, captions
      },
      fontFamily: {
        // Typography from deliverable 08
        serif: ['Cormorant Garamond', 'serif'],  // Headers, headlines
        sans: ['Inter', 'sans-serif'],           // Body text, UI elements
      },
      spacing: {
        // 8pt grid system from deliverable 08
        '4': '4px',
        '8': '8px',
        '16': '16px',
        '24': '24px',
        '32': '32px',
        '48': '48px',
        '64': '64px',
        '96': '96px',
      },
      fontSize: {
        // Type scale from deliverable 08 (mobile first)
        'h1': ['32px', { lineHeight: '1.25', fontWeight: '300' }],
        'h2': ['24px', { lineHeight: '1.33', fontWeight: '400' }],
        'h3': ['20px', { lineHeight: '1.4', fontWeight: '500' }],
        'body': ['16px', { lineHeight: '1.5', fontWeight: '400' }],
        'caption': ['12px', { lineHeight: '1.33', fontWeight: '400' }],
        'button': ['14px', { lineHeight: '1', fontWeight: '500' }],
      },
      borderRadius: {
        // Sharp corners only (Quiet Luxury aesthetic)
        'none': '0',
        DEFAULT: '0',
      },
      boxShadow: {
        // No shadows (flat design)
        'none': 'none',
        DEFAULT: 'none',
      },
    },
  },
  plugins: [],
}
