import { ButtonBase } from '@mui/material';

export const HeaderIdentityLoginButton = () => (
  <ButtonBase
    component="span"
    sx={{
      display: 'flex',
      alignItems: 'center',
      textDecoration: 'none',
      padding: '.25em',
      color: 'white',
      justifyContent: 'center',
    }}
  >
    Přihlásit&nbsp;se
  </ButtonBase>
);
