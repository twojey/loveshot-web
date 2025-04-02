import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/loveshot-web/',
  optimizeDeps: {
    include: ['lucide-react'],
    exclude: []
  },
  server: {
    port: 5173,
    strictPort: true
  }
});
