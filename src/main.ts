import { mount } from 'svelte';
import App from './App.svelte';
import { initRallyApp } from 'rally-modern-sdk';

await initRallyApp('custom-app');

const app = mount(App, {
  target: document.getElementById('app') as Element
});

export default app;
