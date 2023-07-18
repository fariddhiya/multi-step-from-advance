/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        marineBlue: "var(--marine-blue)",
        purplishBlue: "var(--purplish-blue)",
        pastelBlue: "var(--pastel-blue)",
        lightBlue: "var(--light-blue)",
        strawberryRed: "var(--strawberry-red)",

        coolGray: "var(--cool-gray)",
        lightGray: "var(--light-gray)",
        magnolia: "var(--magnolia)",
        alabaster: "var(--alabaster)",
      },
      backgroundImage: {
        "sidebar-mobile": "url('/src/assets/images/bg-sidebar-mobile.svg')",
        "sidebar-desktop": "url('/src/assets/images/bg-sidebar-desktop.svg)",
      },
    },
  },
  plugins: [],
};
