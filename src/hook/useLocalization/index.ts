import { Locale } from '../../core/locale';
import { useShareObject } from '../useShareObject';

export const useLocalization = () => {
  const { getContext, setContext } = useShareObject();

  return {
    getLocale: () => getContext().locale,
    getAvailableLocales: (): Locale[] => Object.values(Locale).map((l) => l),
    setLocale: (locale: Locale | string) => setContext({ locale: locale as Locale }),
  };
};
