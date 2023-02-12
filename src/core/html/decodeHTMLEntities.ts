export const decodeHTMLEntities = (haystack: string) => {
  const entities = [
    ['amp', '&'],
    ['apos', "'"],
    ['#x27', "'"],
    ['#x2F', '/'],
    ['#39', "'"],
    ['#47', '/'],
    ['lt', '<'],
    ['gt', '>'],
    ['nbsp', ' '],
    ['quot', '"'],
  ];

  for (let i = 0, max = entities.length; i < max; ++i) {
    haystack = haystack.replace(new RegExp('&' + entities[i][0] + ';', 'g'), entities[i][1]);
  }

  return haystack;
};
