import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // Fijamos la base para GitHub Pages en este repo
  base: '/Estretegia-Tactica/'
})
