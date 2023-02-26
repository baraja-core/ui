import { Theme } from '../theme/types';
import { createContext } from 'react';
import { resolveDefaultTheme } from '../theme/resolveDefaultTheme';

export type StoreData = {
  theme?: Theme;
};

export type Store = {
  getContext: () => StoreData;
  setContext: (context: Partial<StoreData>) => void;
  setLocalCache?: (context: Partial<StoreData>) => void;
};

export const appLocalStorageKey = 'brj-app__storage';

const createDefaultStore = () => ({ theme: resolveDefaultTheme() });

const trySaveToLocalStorage = (storeData: Partial<StoreData>) => {
  if (typeof localStorage === 'undefined') {
    console.error('Local storage is not available for store local context.');
    return;
  }
  localStorage.setItem(appLocalStorageKey, JSON.stringify(storeData));
};

const getLocalStorage = (): StoreData => {
  const value =
    typeof localStorage !== 'undefined' && localStorage.getItem(appLocalStorageKey)
      ? localStorage.getItem(appLocalStorageKey)
      : undefined;

  return value ? (JSON.parse(value) as StoreData) : {};
};

export const loadInitStorage = (): StoreData => {
  type StoreHaystack = Record<string, unknown>;
  const defaultValues: StoreHaystack = createDefaultStore();
  const localStorage = getLocalStorage();

  const merged: StoreHaystack = Object.fromEntries(
    Object.entries({ ...defaultValues, ...localStorage }).map(([key, value]) => [key, value || defaultValues[key]])
  );

  const sortObject = (unordered: StoreHaystack): StoreHaystack =>
    Object.keys(unordered)
      .sort()
      .reduce((obj, key) => ({ ...obj, [key]: unordered[key] }), {});

  if (JSON.stringify(sortObject(localStorage)) !== JSON.stringify(sortObject(merged))) {
    trySaveToLocalStorage(merged);
  }

  return merged;
};

export const createStore = (localCache: StoreData, setLocalCache: (context: Partial<StoreData>) => void): Store => ({
  getContext: () => localCache,
  setContext: (storeData) => {
    const finalValue = { ...localCache, ...storeData };
    setLocalCache && setLocalCache(finalValue);
    trySaveToLocalStorage(finalValue);
  },
});

export const GlobalAppState = createContext<Store>({
  getContext: () => ({}),
  setContext: (c) => {},
});
