import App from './App.svelte';
import { initRallyApp, type SettingFieldConfig } from 'rally-modern-sdk';

const defaultSettings = {};
const settingsFields: SettingFieldConfig[] = [];

await initRallyApp('Custom App', { defaultSettings, settingsFields });

const app = new App({
  target: document.getElementById('app'),
  props: { defaultSettings, settingsFields }
});

export default app;
