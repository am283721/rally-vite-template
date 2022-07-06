import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";
import { viteSingleFile } from "vite-plugin-singlefile"

export default defineConfig({
  plugins: [
    svelte(),
    viteSingleFile()],
  build: {
    target: "esnext",
    minify: true,
    assetsInlineLimit: 100000000,
    chunkSizeWarningLimit: 100000000,
    cssCodeSplit: false,
    brotliSize: false,
    rollupOptions: {
      output: {
        inlineDynamicImports: true
      },
      external: ['Rally', 'Ext']
    },
  },
});
