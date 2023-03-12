import { Locale } from './index';

const map: Partial<Record<Locale, string>> = {
  [Locale.Cs]: '🇨🇿',
  [Locale.En]: '🇬🇧',
  [Locale.Sk]: '🇸🇰',
};

export const resolveLocaleFlag = (locale: Locale) => map[locale] ?? '🇪🇺';
