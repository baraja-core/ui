export const resolveHTTPSchemeByHost = (host: string) => `http${host.match(/^localhost/) ? '' : 's'}://${host}`;
