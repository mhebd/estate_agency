import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api/v1': 'http://localhost:4000',
      '/uploads': 'http://localhost:4000'
    }
  }
})