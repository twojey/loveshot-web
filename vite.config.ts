import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: process.env.NODE_ENV === 'production' ? '/loveshot-web/' : '/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    emptyOutDir: true,
    sourcemap: true
  },
  optimizeDeps: {
    include: ['lucide-react'],
    exclude: []
  },
  server: {
    port: 5173,
    strictPort: true
  }
});
