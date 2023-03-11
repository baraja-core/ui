import { FC, ReactNode } from 'react';
import { Box, CircularProgress, Typography } from '@mui/material';
import { Theme } from '../../core/theme/types';
import { BrjLogo } from '../BrjLogo';

type InitLoaderProps = {
  children: ReactNode;
  loading?: boolean;
};

export const InitLoader: FC<InitLoaderProps> = ({ children, loading }) => (
  <>
    {loading ?? false ? (
      <Box
        sx={{
          position: 'fixed',
          display: 'flex',
          left: 0,
          top: 0,
          width: '100%',
          height: '100vh',
          background: 'white',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            width: '100%',
            maxWidth: '80em',
            padding: '0 .5em',
            margin: 'auto',
          }}
        >
          <Box>
            <BrjLogo theme={Theme.Light} />
            <Typography sx={{ fontSize: '17pt', marginTop: '.7em', marginBottom: '1.5em' }}>
              The BRJ Dashboard is loading.
            </Typography>
            <Box>
              <CircularProgress sx={{ color: 'black' }} />
            </Box>
          </Box>
        </Box>
      </Box>
    ) : (
      children
    )}
  </>
);
