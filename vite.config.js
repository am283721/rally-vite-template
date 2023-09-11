import { join } from 'path';
import { existsSync, promises as fs } from 'fs';
import { defineConfig, loadEnv } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';
import { viteSingleFile } from 'vite-plugin-singlefile';

const injectSDKSrc = (apiKey = '', version, repo) => {
  return {
    name: 'inject-sdk-src',
    enforce: 'pre',
    transformIndexHtml(html, ctx) {
      const dev = !!ctx?.server;
      const url = dev ? `https://rally1.rallydev.com/apps/2.1/sdk-debug.js?debug=true&_apiKey=${apiKey}` : '/apps/2.1/sdk.js';

      // The '#' symbol in front of the sdkUrl prevents vite from warning us of being unable to bundle the script during build
      return html.replace('#<{sdkUrl}>', url).replace('<{version}>', version).replace('<{repository}>', repo).replace('<{newDate}>', new Date().toString());
    }
  };
};

export default defineConfig(async ({ mode }) => {
  const { VITE_APP_API_KEY } = loadEnv(mode, process.cwd());
  const packageJsonPath = join(process.cwd(), 'package.json');
  let version = '';
  let repo = '';

  if (existsSync(packageJsonPath)) {
    const packageJson = JSON.parse(await fs.readFile(packageJsonPath, 'utf-8'));
    version = packageJson?.version || '';
    repo = packageJson?.repository || '';
  }

  return {
    plugins: [injectSDKSrc(VITE_APP_API_KEY, version, repo), svelte(), viteSingleFile()],
    server: {
      port: 1337
    },
    build: {
      target: 'esnext',
      minify: true,
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
