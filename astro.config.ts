import glsl from "vite-plugin-glsl";
import { defineConfig } from "astro/config";

export default defineConfig({
   redirects: {
      "/": "/bsc",
   },
   vite: {
      plugins: [glsl()],
      build: {
         target: 'esnext',
         assetsDir: '.',  // Put assets in root of dist
         rollupOptions: {
            output: {
               assetFileNames: '[name][extname]'  // Keep original filenames
            }
         }
      },
      optimizeDeps: {
         exclude: ['four']
      }
   },
   output: 'static',
   base: '/' // Serve from root path
});