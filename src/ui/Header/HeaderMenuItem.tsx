import { FC } from 'react';
import { Color } from '../../palette';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { Box, ButtonBase } from '@mui/material';

type HeaderMenuItemProps = {
  label: string;
  href: string;
  selected?: boolean;
};

export const HeaderMenuItem: FC<HeaderMenuItemProps> = ({ label, href, selected }) => {
  const { asPath } = useRouter();
  const useBorder = (color: string) => `2px solid ${selected || href === asPath ? Color.orange : color}`;

  return (
    <Link href={href} style={{ textDecoration: 'none' }}>
      <ButtonBase
        component="span"
        sx={{
          textDecoration: 'none',
          justifyContent: 'left',
          color: 'white',
          ['@media (max-width:700px)']: { width: '100%' },
          ['@media (min-width:700px)']: { margin: '0 .5em' },
        }}
      >
        <Box
          sx={{
            ['@media (min-width:700px)']: {
              padding: '.25em',
              borderBottom: useBorder('transparent'),
              ':hover': { borderBottom: useBorder(Color.white) },
            },
            ['@media (max-width:700px)']: { padding: '0 .75em' },
          }}
        >
          {label}
        </Box>
      </ButtonBase>
    </Link>
  );
};
