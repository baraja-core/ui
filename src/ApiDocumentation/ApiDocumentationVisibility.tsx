import { FC } from 'react';
import { Lock, Public } from '@mui/icons-material';
import { Box } from '@mui/system';
import { Button, Grid } from '@mui/material';
import { Alert } from 'react-bootstrap';

export enum EndpointVisibility {
  Public = 'public',
  Private = 'private',
}

interface ApiDocumentationVisibilityProps {
  visibility: EndpointVisibility;
}

const ApiDocumentationVisibility: FC<ApiDocumentationVisibilityProps> = ({ visibility }) => (
  <Alert variant={visibility === EndpointVisibility.Public ? 'success' : 'warning'} role="alert">
    <Grid container rowSpacing={1}>
      <Grid item xs={10}>
        <h4 className="alert-heading">
          {visibility === EndpointVisibility.Public ? (
            <>
              <Public /> This endpoint is public!
            </>
          ) : (
            <>
              <Lock /> This endpoint is private!
            </>
          )}
        </h4>
        <Box component="p" sx={{ marginBottom: 0 }}>
          {visibility === EndpointVisibility.Public ? (
            <>
              This endpoint is&nbsp;publicly available from all over the&nbsp;Internet. Anyone can use, receive and send
              any data at&nbsp;any time. When implementing this endpoint, consider all security risks.
            </>
          ) : (
            <>
              This endpoint is&nbsp;systemically protected. You must log in&nbsp;and have specific rights assigned
              to&nbsp;call this endpoint.
            </>
          )}
        </Box>
      </Grid>
      <Grid item xs={2} sx={{ textAlign: 'right' }}>
        <Button
          variant="outlined"
          size="small"
          href="https://github.com/baraja-core/structured-api#-permissions"
          target="_blank"
        >
          More info
        </Button>
      </Grid>
    </Grid>
  </Alert>
);

export default ApiDocumentationVisibility;
