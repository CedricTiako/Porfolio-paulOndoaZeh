import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    target: 'es2015',
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          icons: ['lucide-react'],
          utils: ['./src/contexts/ThemeContext']
        }
      }
    },
    chunkSizeWarningLimit: 1000,
    cssCodeSplit: true,
    sourcemap: false
  },
  optimizeDeps: {
    exclude: ['lucide-react'],
    include: ['react', 'react-dom']
  },
  server: {
    hmr: {
      overlay: false
    },
    host: true
  },
  preview: {
    port: 4173,
    host: true
  }
});
