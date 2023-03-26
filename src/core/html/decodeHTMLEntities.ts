export const decodeHTMLEntities = (haystack: string) =>
  [
    { code: '&amp;', entity: '&' },
    { code: '&apos;', entity: "'" },
    { code: '&#x27;', entity: "'" },
    { code: '&#x2F;', entity: '/' },
    { code: '&#39;', entity: "'" },
    { code: '&#47;', entity: '/' },
    { code: '&lt;', entity: '<' },
    { code: '&gt;', entity: '>' },
    { code: '&nbsp;', entity: ' ' },
    { code: '&quot;', entity: '"' },
  ].reduce((item, entity) => item.replace(new RegExp(entity.code, 'g'), entity.entity), haystack);
