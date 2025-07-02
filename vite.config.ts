import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'


// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  server: {
    port: process.env.PORT || 3000, // Fallback to 3000 for local development
    host: '0.0.0.0' // Listen on all network interfaces
  },
  preview: {
    port: process.env.PORT || 4173, // Fallback to 4173 for local preview
    host: '0.0.0.0'
  }
})
