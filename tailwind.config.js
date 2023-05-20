/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      spacing: {
        '1': '8px',
        // Add more custom spacing values as needed
      },
    },
  },
  // Rest of your Tailwind CSS configuration
  plugins: [],
}