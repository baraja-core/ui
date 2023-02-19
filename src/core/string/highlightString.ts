export const highlightString = (haystack: string, query: string) =>
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
    (whole, word): string => `<strong style="color:#00158e">${word}</strong>`
  );
