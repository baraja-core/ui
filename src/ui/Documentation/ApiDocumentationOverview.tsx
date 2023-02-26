import { FC } from 'react';
import { Box, MenuItem } from '@mui/material';
import { DocumentationEndpoint } from '../../core/documentation/types';

interface RestApiDocumentationOverviewProps {
  endpoints: DocumentationEndpoint[];
  setEndpoint: (endpoint?: string) => void;
}

export const ApiDocumentationOverview: FC<RestApiDocumentationOverviewProps> = ({ endpoints, setEndpoint }) => (
  <>
    <h1 style={{ marginTop: 0 }}>Welcome to Omnichannel REST API Documentation</h1>
    <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
      {endpoints.map((endpoint) => (
        <Box sx={{ width: 'calc(100%/3)' }} key={endpoint.class}>
          <Box
            sx={{
              border: '1px solid rgba(0,0,0,.125)',
              borderRadius: '.25rem',
              margin: '.5em .5em',
              background: 'white',
            }}
            onClick={() => setEndpoint(endpoint.route)}
          >
            <MenuItem sx={{ whiteSpace: 'normal' }}>
              <Box>
                <Box>
                  <b>{endpoint.name}</b>
                </Box>
                {endpoint.description && <Box sx={{ marginTop: '.5em' }}>{endpoint.description}</Box>}
              </Box>
            </MenuItem>
          </Box>
        </Box>
      ))}
    </Box>
  </>
);
