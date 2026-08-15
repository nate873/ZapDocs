import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    // Build straight into the folder Flask serves as static files,
    // so `npm run build` + `python app.py` is all that's needed.
    outDir: '../static',
    emptyOutDir: true,
  },
  server: {
    // During development (npm run dev), forward API calls to Flask
    // running on port 5000, so you don't hit CORS issues.
    proxy: {
      '/api': 'http://localhost:5000',
    },
  },
})