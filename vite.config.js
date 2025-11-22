import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: './',  // CHANGED to relative path
  build: {
    outDir: 'dist'
  }
})