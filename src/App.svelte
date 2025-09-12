<script lang="ts">
  import { App, setDefaultSettings } from 'rally-modern-sdk';
  import { setAppState } from './app-state.svelte.js';
  import { defaultSettings } from './utils.js';
  import Settings from './Settings.svelte';

  const appState = setAppState();
  setDefaultSettings(defaultSettings);
</script>

<App>
  {#snippet settings()}
    <Settings />
  {/snippet}
</App>

<main></main>

<style>
  main {
    padding: 0.8rem;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    font-size: 1.3rem;
    height: 100vh;
    overflow-y: auto;
    background-color: white;
  }
</style>
