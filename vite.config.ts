/* eslint-disable import/no-extraneous-dependencies */
/// <reference types="vitest" />
import { defineConfig } from 'vite';
import path from 'path';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./src/setupTest.ts'],
  },
  resolve: {
    alias: {
      modules: path.resolve(__dirname, './src/modules/'),
      shared: path.resolve(__dirname, './src/shared/'),
      public: path.resolve(__dirname, './public/'),
    },
  },
});
