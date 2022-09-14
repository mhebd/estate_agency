import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

/**
 * @param newFilename {string}
 * @returns {import('vite').Plugin}
 */
const renameIndexPlugin = (newFilename) => {
  if (!newFilename) return;

  return {
    name: 'renameIndex',
    enforce: 'post',
    generateBundle(options, bundle) {
      const indexHtml = bundle['index.html'];
      indexHtml.fileName = newFilename;
    },
  };
};

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), renameIndexPlugin('dashboard.html')],
  server: {
    proxy: {
      '/api/v1': 'http://localhost:4000',
      '/uploads': 'http://localhost:4000',
    },
  },
  build: {
    outDir: '../views',
  },
});
