import { isNumeric } from './isNumeric';

describe('decodeHTMLEntities', () => {
  test('isNumeric should return true for numeric values', () => {
    expect(isNumeric('123')).toBe(true);
    expect(isNumeric('-123')).toBe(true);
    expect(isNumeric('1.23')).toBe(true);
    expect(isNumeric('0')).toBe(true);
  });

  test('isNumeric should return false for non-numeric values', () => {
    expect(isNumeric('abc')).toBe(false);
    expect(isNumeric('')).toBe(false);
    expect(isNumeric('NaN')).toBe(false);
  });
});
