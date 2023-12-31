/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      padding: {
        DEFAULT: '15px',
      },
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '960px',
      xl: '1200px',
    },
    extend: {
      colors: {
        primary: '#131424',
        secondary: '#393A47',
        accent: '#F13024',
        G: 'rgb(190 242 100)',
        B: 'rgb(147 197 253)',
        R: 'rgb(252 165 165)',
      },
      backgroundImage: {
        explosion: 'url("./src/assets/bg-explosion.png")',
        circles: 'url("./src/assets/bg-circles.png")',
        circleStar: 'url("./src/assets/circle-star.svg")',
        site: 'url("./src/assets/site-bg.jpg")',
      },
      animation: {
        'spin-slow': 'spin 6s linear infinite',
      },
      fontFamily: {
        sora: "'Sora', sans-serif",
      },
      backdropBlur: {
        xs: '2px',
      }
    },
  },
  container: {
    padding: {
      DEFAULT: '15px',
    },
  },
  plugins: [require('tailwind-scrollbar')],
}

