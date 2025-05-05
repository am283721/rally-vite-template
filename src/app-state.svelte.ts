import { getContext, setContext } from 'svelte';

class AppStateClass {
  loading = $state(true);
}

const KEY = Symbol('APP_STATE');

export function setAppState() {
  return setContext(KEY, new AppStateClass());
}

export function getAppState() {
  return getContext<AppState>(KEY);
}

export type AppState = ReturnType<typeof setAppState>;
