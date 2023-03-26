import { cmsLink } from './cmsLink';

describe('resolveUsernameInitials', () => {
  test('cmsLink - homepage', () => {
    expect(cmsLink('')).toBe('/admin');
    expect(cmsLink('homepage')).toBe('/admin');
    expect(cmsLink('Homepage')).toBe('/admin');
    expect(cmsLink('homepage:default')).toBe('/admin');
    expect(cmsLink('Homepage:default')).toBe('/admin');
    expect(cmsLink('Homepage:default', { id: 123 })).toBe('/admin?id=123');
    expect(cmsLink('Homepage:statistics')).toBe('/admin/homepage/statistics');
  });

  test('cmsLink - standard', () => {
    expect(cmsLink('ProductCategory')).toBe('/admin/product-category');
    expect(cmsLink('ProductCategory:detail')).toBe('/admin/product-category/detail');
    expect(cmsLink('ProductCategory:detailPrint')).toBe('/admin/product-category/detail-print');
    expect(cmsLink('ProductCategory:detail', { id: 123, name: 'Test' })).toBe(
      '/admin/product-category/detail?id=123&name=Test'
    );
  });

  test('cmsLink - default plugin name', () => {
    expect(cmsLink(':statistics')).toBe('/admin/homepage/statistics');
    expect(cmsLink(':TestRoute', { id: 123, name: 'Test' })).toBe('/admin/homepage/test-route?id=123&name=Test');
  });

  test('cmsLink - default view name', () => {
    expect(cmsLink('TestRoute:', { id: 123, name: 'Test' })).toBe('/admin/test-route?id=123&name=Test');
  });
});
