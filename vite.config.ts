import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: { 
      '@/*': path.resolve(__dirname, './src/'),
      '@/components': path.resolve(__dirname, './src/components/'),
      '@/page': path.resolve(__dirname, './src/page'),
      '@/screen': path.resolve(__dirname, './src/components/screen'),
      '@/ui': `${path.resolve(__dirname, './src/components/ui/')}`,
      '@/utils': `${path.resolve(__dirname, './src/components/utils/')}`,
      '@/hooks': `${path.resolve(__dirname, './src/hooks/')}`,
      '@/assets': path.resolve(__dirname, './src/assets/'),
    },
  },
});
