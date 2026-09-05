import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  // Relative asset URLs work on both /porta-finance-site/ and www.porta.finance/
  base: './',
  plugins: [react(), tailwindcss()],
})
