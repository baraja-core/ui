export const htmlSpecialCharsDecode = (text: string): string => {
  const map: Record<string, string> = {
    '&amp;': '&',
    '&#038;': '&',
    '&nbsp;': ' ',
    '&lt;': '<',
    '&gt;': '>',
    '&quot;': '"',
    '&#039;': "'",
    '&#8217;': '’',
    '&#8216;': '‘',
    '&#8211;': '–',
    '&#8212;': '—',
    '&#8230;': '…',
    '&#8221;': '”',
  };

  return text.replace(/\&[\w\d\#]{2,5}\;/g, (m) => map[m] ?? m);
};
