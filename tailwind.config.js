/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#6366F1',
        secondary: '#EEF2FF',
        background: '#FFFFFF',
        accent: '#8B5CF6',
        text: '#1E293B',
      },
      fontFamily: {
        'sans': ['Google Sans', 'sans-serif'],
        'google-sans': ['Google Sans', 'sans-serif'],
      },
      fontSize: {
        'h1': ['48px', { lineHeight: '1.2', fontWeight: '700' }],
        'h2': ['40px', { lineHeight: '1.3', fontWeight: '700' }],
        'h3': ['28px', { lineHeight: '1.4', fontWeight: '700' }],
        'body': ['16px', { lineHeight: '24px', fontWeight: '400' }],
      },
      spacing: {
        'gutter': '24px',
      },
      maxWidth: {
        'container': '1200px',
      },
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ],
}