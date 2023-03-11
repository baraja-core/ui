import { Box } from '@mui/material';
import { HeaderIdentityLoginButton } from './HeaderIdentityLoginButton';
import { HeaderIdentityUserPopper } from './HeaderIdentityUserPopper';
import { useShareObject } from '../../hook/useShareObject';

export const HeaderIdentity = () => {
  const { getUserIdentity } = useShareObject();
  const identity = getUserIdentity();

  return (
    <Box sx={{ display: 'flex', alignItems: 'stretch' }}>
      {identity.isLoggedIn ? <HeaderIdentityUserPopper identity={identity} /> : <HeaderIdentityLoginButton />}
    </Box>
  );
};
