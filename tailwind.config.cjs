/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,svelte,ts,tsx,vue}"],
  theme: {
    // Overrides
    colors: {
      current: "currentcolor",
      pink: {
        dark: "hsl(337, 48%, 49%)",
        charm: "hsl(337, 60%, 64%)",
      },
      blue: {
        sj: "hsl(207, 33%, 32%)",
        mirage: "hsl(207, 27%, 15%)",
        "light-sj": "hsl(207, 16%, 50%)",
        bg: "hsl(209, 46%, 95%)",
      },
      white: {
        "link-water": "hsl(220, 60%, 99%)",
        pure: "hsl(0, 0%, 100%)",
      },
      red: "hsl(0, 100%, 50%)",
      transparent: "transparent",
    },

    fontFamily: {
      sans: ["Public Sans", "sans-serif"],
      serif: ["DM Serif Display", "serif"],
    },
    fontSize: {
      "9p": "0.5625rem",
      "10p": "0.625rem",
      "11p": "0.6875rem",
      "13p": "0.8125rem",
      "15p": "0.9375rem",

      4: "1rem",
      4.5: "1.125rem",
      5: "1.25rem",
      6: "1.5rem",
      8: "2rem",
      9: "2.25rem",
      10: "2.5rem",
      12: "3rem",
      14: "3.5rem",
      18: "4.5rem",
    },

    letterSpacing: {
      55: "0.034375rem",
      43: "0.026875rem",
      37: "0.023125rem",
      25: "0.015625rem",
      18: "0.01125rem",
      14: "0.00875rem",
      12: "0.0075rem",
    },

    // Extensions
    extend: {
      lineHeight: {
        body: "1.866",
        card: "1.666",
        h2: "1.166",
        "h3-big": 1.25,
        "h3-small": 1.388,
        h4: "1.333",
      },

      screens: {
        container: "69.375em",
      },

      spacing: {
        17: "4.25rem",
        18: "4.5rem",
        19: "4.75rem",
        22: "5.5rem",
        24: "6rem",
        25: "6.25rem",
        35: "8.75rem",
      },
    },
  },
  plugins: [],
};
