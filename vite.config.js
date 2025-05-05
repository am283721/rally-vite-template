import { join } from 'path';
import { existsSync, promises as fs } from 'fs';
import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';
import { viteSingleFile } from 'vite-plugin-singlefile';

const injectBuildInfo = (version, repo) => {
  return {
    name: 'inject-build-info',
    enforce: 'pre',
    transformIndexHtml(html) {
      return html.replace('<{version}>', version).replace('<{repository}>', repo).replace('<{newDate}>', new Date().toString());
    }
  };
};

export default defineConfig(async () => {
  const packageJsonPath = join(process.cwd(), 'package.json');
  let version = '';
  let repo = '';

  if (existsSync(packageJsonPath)) {
    const packageJson = JSON.parse(await fs.readFile(packageJsonPath, 'utf-8'));
    version = packageJson?.version || '';
    repo = packageJson?.repository || '';
  }

  return {
    plugins: [injectBuildInfo(version, repo), svelte(), viteSingleFile()],
    server: {
      port: 1337,
      origin: 'https://rally1.rallydev.com',
      proxy: {
        '/slm/': {
          target: 'https://rally1.rallydev.com',
          changeOrigin: true,
          secure: false
        }
      }
    },
    build: {
      target: 'esnext',
      minify: true,
      emptyOutDir: false,
      assetsInlineLimit: 100000000,
      chunkSizeWarningLimit: 100000000,
      cssCodeSplit: false,
      brotliSize: false,
      rollupOptions: {
        output: {
          inlineDynamicImports: true
        },
        external: ['Rally', 'Ext', 'moment']
      }
    }
  };
});
