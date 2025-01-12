/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // يدعم ملفات TypeScript و React
  ],
  theme: {
    extend: {
      fontFamily: {
        cairo: ["Cairo", "sans-serif"], // تعريف خط Cairo
      },
      colors: {
        main: "var(--mainColor)",
        mainAlt: "var(--mainColorAlt)",
      },
    },
  },
  plugins: [],
};
