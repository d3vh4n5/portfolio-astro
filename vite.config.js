import { defineConfig } from 'vite';

export default defineConfig({
  // ... otras configuraciones ...

  resolve: {
    alias: {
      '@': '/opt/build/repo/src',
    },
  },
});