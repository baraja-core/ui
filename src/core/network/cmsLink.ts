import { httpBuildQuery } from '../network/httpBuildQuery';

export const cmsLink = (route: string, params: Record<string, unknown> = {}) => {
  const formatter = (haystack: string) =>
    (haystack.match(/([A-Z][a-z0-9]*)|(^[a-z]+)/g) as RegExpMatchArray)
      .map((i) => i.toLowerCase())
      .join('-')
      .trim();

  const [pluginPart, viewPart] = `${route}:`.split(':');
  const plugin = formatter(pluginPart ? pluginPart : 'Homepage');
  const view = formatter(viewPart ? viewPart : 'default');

  const pathFormatter = () => {
    if (plugin !== 'homepage') return `${plugin}${view !== 'default' ? `/${view}` : ''}`;
    if (view !== 'default') return `homepage/${view}`;
    return '';
  };

  return `/admin${`/${pathFormatter()}`.replace(/\/$/, '')}${
    Object.entries(params).length > 0 ? `?${httpBuildQuery(params)}` : ''
  }`;
};
