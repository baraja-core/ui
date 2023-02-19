export const valueSerializer = (value: unknown): string => {
  if (value === undefined || value === null) return '';
  if (value === true) return '1';
  if (value === false) return '0';
  if (value === 0) return '0';

  return String(value ? value : '');
};
