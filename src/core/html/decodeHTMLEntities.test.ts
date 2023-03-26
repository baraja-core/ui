import { decodeHTMLEntities } from './decodeHTMLEntities';

describe('decodeHTMLEntities', () => {
  it('should correctly decode HTML entities', () => {
    expect(decodeHTMLEntities('This &amp; that &quot;quoted&quot;')).toEqual('This & that "quoted"');
  });

  it('should handle multiple occurrences of the same HTML entity', () => {
    expect(decodeHTMLEntities('&lt;&lt;Hello&gt;&gt;')).toEqual('<<Hello>>');
  });

  it('should handle unknown HTML entities', () => {
    expect(decodeHTMLEntities('This &unknown; entity')).toEqual('This &unknown; entity');
  });
});
