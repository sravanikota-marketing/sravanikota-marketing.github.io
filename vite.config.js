import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// GitHub Pages user/organization site base is '/'.
// If this becomes a project site, update base to '/repo-name/'.
export default defineConfig({
  base: '/',
  plugins: [react()],
})
