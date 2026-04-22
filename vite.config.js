import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class", // ✅ VERY IMPORTANT

  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {},
  },

  plugins: [tailwindcss()],
};