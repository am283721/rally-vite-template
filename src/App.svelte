<script lang="ts">
  import { App, type SettingFieldConfig } from 'rally-modern-sdk';

  let { defaultSettings, settingsFields }: { defaultSettings: Record<string, any>; settingsFields: SettingFieldConfig[] } = $props();
</script>

<App {settingsFields} {defaultSettings} />

<main></main>

<style>
  main {
    padding: 0.8rem;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    font-size: 1.3rem;
    height: 100vh;
    background-color: white;
  }
</style>
