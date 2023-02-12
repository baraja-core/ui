import { Locale } from './index';

export const resolveLocaleByHost = (host: string | undefined, customLocale: string | undefined = undefined): Locale => {
  const locale = (() => {
    if (customLocale && customLocale !== 'undefined') return customLocale;
    const hostMatch = host?.match(/^(\w+).php.brj.cz$/);
    return hostMatch ? hostMatch[1] : undefined;
  })();

  return Object.entries(Locale)
    .map(([k, v]) => v as string)
    .includes(String(locale))
    ? (locale as Locale)
    : Locale.Cs;
};
