import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "https://himuexe.github.io/e-plantShopping/",
  homepage: "https://himuexe.github.io/e-plantShopping/",
  plugins: [react()],
})
