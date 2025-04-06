import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    watch: { usePolling: true },
    open: true, // Abre automáticamente el navegador
  },
  base: "/modulo-3-evaluacion-final-IrmaPineiro/",

})
