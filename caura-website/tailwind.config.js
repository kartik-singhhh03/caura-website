/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1B4332',
          light:   '#2D6A4F',
          dark:    '#0D2B1F',
        },
        sage: {
          DEFAULT: '#74C69D',
          light:   '#D8F3DC',
          medium:  '#52B788',
          pale:    '#F0FAF4',
        },
        accent: {
          DEFAULT: '#457B9D',
          light:   '#A8DADC',
          pale:    '#EBF4F8',
        },
        offwhite: '#F8F9F4',
        cream:    '#F5F0E8',
        charcoal: '#2C3338',
        muted:    '#6B7280',
      },
      fontFamily: {
        heading: ['Poppins', 'Inter', 'sans-serif'],
        body:    ['Open Sans', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
