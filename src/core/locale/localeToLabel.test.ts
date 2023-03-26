import { Locale } from '.';
import { localeToLabel } from './localeToLabel';

describe('localeToLabel', () => {
  it('returns the label for a given locale code', () => {
    expect(localeToLabel(Locale.Cs)).toEqual('Čeština');
    expect(localeToLabel(Locale.En)).toEqual('English');
    expect(localeToLabel(Locale.Fr)).toEqual('Français');
    expect(localeToLabel(Locale.Zh)).toEqual('中国');
    expect(localeToLabel(Locale.Ja)).toEqual('日本');
  });
});
