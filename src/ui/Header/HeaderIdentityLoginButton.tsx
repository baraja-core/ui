import { ButtonBase } from '@mui/material';
import Link from 'next/link';

export const HeaderIdentityLoginButton = () => (
  <Link href="/login">
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
  </Link>
);
