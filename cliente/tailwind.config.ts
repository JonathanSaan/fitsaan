import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      "white": "#fffffc",
      "black": "#0d0b0d",
      "gray": "#717070",
      "red": {
        DEFAULT: "#da272c",
        600: "#b71e22",
        700: "#981c1f",
      },
    },
  },
  plugins: [],
};

export default config;
