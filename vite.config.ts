import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// IMPORTANT for GitHub Pages:
// Set `base` to '/<your-repo-name>/' (e.g. '/bytonia-academy/').
// If you deploy to a custom domain or to <username>.github.io root repo, use '/'.
export default defineConfig({
  base: '/bytonia-academy/',
  plugins: [react()],
})
