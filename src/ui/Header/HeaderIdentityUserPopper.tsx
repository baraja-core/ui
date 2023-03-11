import { FC, useState } from 'react';
import { Box, Button, ButtonBase } from '@mui/material';
import { UserIdentity } from '../../core/shareObject/types';
import { Card } from '../Card';
import ExpandMore from '@mui/icons-material/ExpandMore';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

type Props = {
  identity: UserIdentity;
};

export const HeaderIdentityUserPopper: FC<Props> = ({ identity }) => {
  const [open, setOpen] = useState(false);

  // display: 'flex',
  // alignItems: 'center',
  // textDecoration: 'none',
  // padding: '.25em',
  // color: 'white',
  // justifyContent: 'center',

  const logout = () => {
    // TODO
  };

  return (
    <>
      <ButtonBase
        component="span"
        onClick={() => setOpen(!open)}
        sx={{
          color: 'white',
          background: open ? 'rgba(255,255,255,.2)' : undefined,
          textTransform: 'none',
          padding: 0,
          paddingLeft: 1,
        }}
      >
        <AccountCircleIcon />
        <span style={{ whiteSpace: 'nowrap' }}>{identity.fullName}</span>
        <ExpandMore />
      </ButtonBase>
      {open && (
        <Box
          sx={{
            position: 'absolute',
            width: '300px',
            top: '45px',
            right: 0,
            marginRight: '10px',
            zIndex: 99998,
          }}
        >
          <Card>
            <Box sx={{ textAlign: 'center', padding: '1em' }}>
              <AccountCircleIcon />
              <Box sx={{ marginTop: 1 }}>
                <span style={{ whiteSpace: 'nowrap' }}>{identity.fullName}</span>
              </Box>
            </Box>
            <Box sx={{ textAlign: 'center' }}>
              <Button variant="contained" href="/my-profile">
                Manage your account
              </Button>
            </Box>
            <Box sx={{ marginTop: '1em' }}>
              <Button
                variant="contained"
                href="/settings"
                sx={{ width: '100%', marginBottom: '.5em', padding: '.75em' }}
              >
                Settings
              </Button>
            </Box>
            <Box sx={{ display: 'flex', padding: '1em', marginTop: '.5em', borderTop: '1px solid black' }}>
              <Box sx={{ width: '45%' }}>
                <Button variant="contained" onClick={() => logout()}>
                  Sign out
                </Button>
              </Box>
            </Box>
          </Card>
        </Box>
      )}
    </>
  );
};
