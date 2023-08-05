import { defineConfig } from 'vite';
import solidPlugin from 'vite-plugin-solid';

export default defineConfig({
  base: "/solidjs-quiz/",
  plugins: [solidPlugin()],
  server: {
    port: 3000,
  },
  build: {
    target: 'esnext',
    outDir: 'build', // setting build output to "build" instead of dist (vor deploying with gh-pages)
  },
});
