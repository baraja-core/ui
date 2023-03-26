import { Locale } from '.';

const localeCodeToLabel: Partial<Record<Locale, string>> = {
  [Locale.Cs]: 'Čeština',
  [Locale.En]: 'English',
  [Locale.Fr]: 'Français',
  [Locale.It]: 'Italiano',
  [Locale.Pl]: 'Polska',
  [Locale.De]: 'Deutsch',
  [Locale.Sk]: 'Slovensky',
  [Locale.Sv]: 'Svenska',
  [Locale.Es]: 'Español',
  [Locale.Zh]: '中国',
  [Locale.Ja]: '日本',
  [Locale.Uk]: 'український',
  [Locale.Da]: 'Dansk',
};

export const localeToLabel = (locale: Locale) => localeCodeToLabel[locale] ?? locale;
