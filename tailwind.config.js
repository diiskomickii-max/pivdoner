/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          orange: '#FF5500',
          'orange-hover': '#E04A00',
          'orange-dark': '#C23E00',
          yellow: '#FFB800',
          'yellow-light': '#FDE68A',
          charcoal: '#18191B',
          'charcoal-light': '#242629',
          cream: '#FFFDF9',
          'cream-alt': '#F7F3EA',
          border: '#E8E4D9',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        heading: ['Montserrat', 'Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'food': '0 10px 25px -5px rgba(255, 85, 0, 0.15), 0 8px 10px -6px rgba(0, 0, 0, 0.05)',
        'card': '0 4px 20px rgba(0, 0, 0, 0.06)',
        'card-hover': '0 12px 30px rgba(24, 25, 27, 0.12)',
      }
    },
  },
  plugins: [],
}
