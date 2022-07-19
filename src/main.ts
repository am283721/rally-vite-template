import App from './App.svelte';
import SDK from 'rally-modern-sdk';

await SDK.App.initRallyApp('Custom App');

const app = new App({
  target: document.getElementById('app')
});

export default app;
