/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inder: ["Inder", "sans-serif"],
      },
      backgroundImage: {
        "custom-orange":
          "linear-gradient(0deg, rgba(255, 85, 0, 1) 0%, rgba(250, 180, 122, 1) 100%)",
        "article-image": "url('/articlesbg.jpg')",
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        greenafri: "var(--green)",
      },
    },
  },
  plugins: [],
};
