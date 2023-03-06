import { FC, useEffect, useState } from 'react';
import { Box } from '@mui/material';
import { ApiDocumentation } from '../../core/documentation/types';
import { ApiDocumentationMenu } from './ApiDocumentationMenu';
import { ApiDocumentationEndpoint } from './ApiDocumentationEndpoint';
import { ApiDocumentationOverview } from './ApiDocumentationOverview';

export const ApiDocumentationApp: FC<ApiDocumentation> = ({ endpoints }) => {
  const getHashParts = () => String(window.location.hash.replace(/^#(.*)$/, '$1')).match(/^([^/]+)(?:\/([^/]+))?/);
  const endpointParts = getHashParts();
  const [activeEndpoint, setActiveEndpoint] = useState<string>();
  const [activeAction, setActiveAction] = useState<string>();
  const [menuOpen, setMenuOpen] = useState(true);
  const selectedEndpoint = endpoints.find((endpointItem) => endpointItem.route === activeEndpoint);

  const onHashChanged = () => {
    const parts = getHashParts();
    if (parts) {
      setActiveEndpoint(parts[1] || undefined);
      setActiveAction(parts[2] || 'default');
    } else {
      setActiveEndpoint(undefined);
    }
  };

  useEffect(() => onHashChanged(), [endpointParts]);

  const setEndpoint = (endpoint: string | undefined) => {
    window.location.href = `${window.location.href.replace(/^(.+)#(.*)$/, '$1')}#${endpoint}`;
  };

  useEffect(() => {
    window.addEventListener('hashchange', onHashChanged);
    return () => {
      window.removeEventListener('hashchange', onHashChanged);
    };
  }, []);

  return (
    <Box sx={{ margin: '2em 1.5em' }}>
      <Box sx={{ display: 'flex' }}>
        <Box sx={{ width: menuOpen ? '20%' : '8%', maxWidth: '20em', marginRight: '1.5em' }}>
          <ApiDocumentationMenu
            endpoints={endpoints}
            activeEndpoint={activeEndpoint}
            isMenuOpen={menuOpen}
            setEndpoint={setEndpoint}
            setMenuOpen={() => setMenuOpen(!menuOpen)}
          />
        </Box>
        <Box sx={{ width: '100%' }}>
          {selectedEndpoint ? (
            <ApiDocumentationEndpoint endpoint={selectedEndpoint} activeAction={activeAction} />
          ) : (
            <ApiDocumentationOverview endpoints={endpoints} setEndpoint={setEndpoint} />
          )}
        </Box>
      </Box>
    </Box>
  );
};
