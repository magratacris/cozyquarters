/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      xs: "360px", //mobile-xs
      sm: "480px", //mobile
      md: "768px", //tablet
      lg: "976px", //tablet portait
      xl: "1280px", //tablet-landscape/laptop/720p
      "2xl": "1920px", //desktop/1080p
      "3xl": "2560px", //1440p res
    },
    //tailwind-default
    // sm: "640px",
    // md: "768px",
    // lg: "1024px",
    // xl: "1280px",
    // "2xl": "1536px",
    //---------------------------
    //phone-sm :        400px
    //phone:            600px
    //phone-big:        740px
    //tablet-portrait:   940px
    //tablet-landscape:  1214px
    //desktop:            1800px
    extend: {
      colors: {
        "main-color": "#10110E",
        "sec-color": "#20262E",
        "accent-color": "#fb76a1",
        "text-main": "#F1F0E8",
        "card-color": "#292929",
      },
      animation: {
        float: "float 6s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%": { transform: "translatey(0px)" },
          "50%": { transform: "translatey(-20px)" },
          "100%": { transform: "translatey(0px)" },
        },
      },
    },
    fontFamily: {
      openSans: ["Poppins", "sans-serif"],
    },
  },
  plugins: [],
};
