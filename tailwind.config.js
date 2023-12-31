/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  /* theme: {
    extend: {},
  }, */

  daisyui: {
    themes: [
      {
        light: {
          "primary": "#176F68",
          "secondary": "#FFC000",
          "accent": "#FFEDD5",
          "neutral": "#176F68",
          "base-100": "#ffffff",
          "info": "#98A8DD",
          "success": "#1BBB70",
          "warning": "#DF7E07",
          "error": "#FA5C5C",


          "--rounded-box": "1rem", // border radius rounded-box utility class, used in card and other large boxes
          "--rounded-btn": "0.5rem", // border radius rounded-btn utility class, used in buttons and similar element
          "--rounded-badge": "1.9rem", // border radius rounded-badge utility class, used in badges and similar
          "--animation-btn": "0.25s", // duration of animation when you click on button
          "--animation-input": "0.2s", // duration of animation for inputs like checkbox, toggle, radio, etc
          "--btn-focus-scale": "0.95", // scale transform of button when you focus on it
          "--border-btn": "1px", // border width of buttons
          "--tab-border": "1px", // border width of tabs
          "--tab-radius": "0.5rem", // border radius of tabs
        },
      },
      {
        dark: {
          "primary": "#D9F99D",
          "secondary": "#FDE68A",
          "accent": "#4B5563",
          "neutral": "#F3F4F6",
          "base-100": "#1F2937",
          "info": "#98A8DD",
          "success": "#1BBB70",
          "warning": "#F59E0B",
          "error": "#FB7185",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}

