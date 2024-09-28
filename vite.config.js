import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'https://api.vercel.app',
        changeOrigin: true,
        secure: false, // Si el certificado SSL está causando problemas
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
});
