<script lang="ts">
  import { App, type SettingFieldConfig } from 'rally-modern-sdk';

  export let defaultSettings: Record<string, any> = {};
  export let settingsFields: SettingFieldConfig[];
</script>

<App {settingsFields} {defaultSettings} />

<main />

<style>
  main {
    padding: 0.8rem;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    font-size: 1.3rem;
  }
</style>
