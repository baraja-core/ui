import { Theme } from './types';

export const localStorageKey = 'system__dark-mode';

export const resolveDefaultTheme = (): Theme =>
  typeof localStorage !== 'undefined' && localStorage.getItem(localStorageKey)
    ? (localStorage.getItem(localStorageKey) as Theme)
    : typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
    ? Theme.Dark
    : Theme.Light;
