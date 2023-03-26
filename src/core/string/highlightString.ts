import { Color } from '../../palette';

export const highlightString = (haystack: string, query: string, color = Color.prideBlue) =>
  haystack.replace(
    new RegExp(
      `(${query
        .replace(/\s+/g, ' ')
        .trim()
        .split(' ')
        .map((word) => word.replace(/([^\w\s])/, '\\$1'))
        .join('|')})`,
      'gi'
    ),
    (whole, word): string => `<strong style="color:${color}">${word}</strong>`
  );
