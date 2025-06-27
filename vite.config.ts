import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// no static copy

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        popup: 'popup.html',
      },
      output: {
        entryFileNames: 'assets/[name].js',
        chunkFileNames: 'assets/[name]-[hash].js',
        assetFileNames: 'assets/[name]-[hash][extname]'
      }
    }
  }
});
