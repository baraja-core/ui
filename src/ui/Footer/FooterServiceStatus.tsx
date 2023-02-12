import { Box } from '@mui/material';
import { InternalServiceStatus } from '../Internal/InternalServiceStatus';

export const FooterServiceStatus = () => (
  <Box sx={{ display: 'flex' }}>
    <InternalServiceStatus status="ok" />
  </Box>
);
