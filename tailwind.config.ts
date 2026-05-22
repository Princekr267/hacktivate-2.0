import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          DEFAULT: '#EFD844',
          mid: '#D89202',
          dark: '#B36A04',
        },
        purple: {
          bg: '#130522',
          mid: '#240c3d',
          accent: '#4e136b',
          highlight: '#983cb0',
        },
        cream: '#FFFCF3',
        black: {
          DEFAULT: '#080511',
        }
      },
      fontFamily: {
        fredoka: ['var(--font-fredoka)'],
        nunito: ['var(--font-nunito)'],
      },
      boxShadow: {
        'offset': '5px 5px 0px #B36A04',
        'offset-black': '5px 5px 0px #080511',
        'offset-hover': '8px 8px 0px #B36A04',
        'offset-black-hover': '8px 8px 0px #080511',
      }
    },
  },
  plugins: [],
};
export default config;
