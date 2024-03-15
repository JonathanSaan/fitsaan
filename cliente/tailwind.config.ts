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
      "red": "#da272c",
    },
  },
  plugins: [],
};

export default config;
