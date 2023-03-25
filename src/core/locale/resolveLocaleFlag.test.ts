import { Locale } from './index';
import { resolveLocaleFlag } from './resolveLocaleFlag';

describe('resolveLocaleFlag', () => {
  test('Simple cases', () => {
    expect(resolveLocaleFlag(Locale.Cs)).toEqual('🇨🇿');
    expect(resolveLocaleFlag(Locale.En)).toEqual('🇬🇧');
  });
});
