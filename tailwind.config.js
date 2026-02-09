/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#001f3f', // Primary headings, nav, footer
          light: '#003366',
          dark: '#001226',
        },
        'sky-blue': {
          DEFAULT: '#87ceeb', // CTAs, accents
          light: '#bfe6f7',
          dark: '#5dabd1',
        },
        teal: {
          DEFAULT: '#39cccc',
          light: '#7fdbff',
          dark: '#2c9f9f',
        },
        beige: {
          DEFAULT: '#f5f5dc', // Secondary backgrounds
          light: '#fdfdf6',
          dark: '#e8e8c8',
        },
        pale: {
          DEFAULT: '#f8fafc', // Subtle section backgrounds (Slate-50)
          blue: '#f0f9ff', // Sky-50
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'clinic-pattern': "url('https://images.dualite.app/99d68bbd-6706-4896-a9bb-1e740e1b4b9b/WhatsApp_Image_2026-01-30_at_2.59.45_PM-31470b61-edfe-4386-a0c1-16a723c0aa89.webp')",
      },
    },
  },
  plugins: [],
};
