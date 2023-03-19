import { FC, ReactNode, useState } from 'react';
import { Box, ButtonBase, Container } from '@mui/material';
import { HeaderHeight } from './types';
import { Color } from '../../palette';
import { Card } from '../Card';
import { useRouter } from 'next/router';
import Link from 'next/link';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

type HeaderMenuItemProps = {
  label: string;
  href: string;
  selected?: boolean;
  children?: ReactNode | undefined;
};

export const HeaderMenuItem: FC<HeaderMenuItemProps> = ({ label, href, selected, children }) => {
  const { asPath } = useRouter();
  const [open, setOpen] = useState(false);
  const useBorder = (color: string) => `2px solid ${selected || href === asPath || open ? Color.orange : color}`;

  const button = (
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
          display: 'flex',
          ['@media (min-width:700px)']: {
            padding: '.25em',
            borderBottom: useBorder('transparent'),
            ':hover': { borderBottom: useBorder(Color.white) },
          },
          ['@media (max-width:700px)']: { padding: '0 .75em' },
        }}
      >
        <Box>{label}</Box>
        {children && (
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            {open ? (
              <KeyboardArrowUpIcon sx={{ fontSize: '1em', m: 0 }} />
            ) : (
              <KeyboardArrowDownIcon sx={{ fontSize: '1em', m: 0 }} />
            )}
          </Box>
        )}
      </Box>
    </ButtonBase>
  );

  return (
    <>
      {children ? (
        <Box component="span" onClick={() => setOpen(!open)}>
          {button}
        </Box>
      ) : (
        <Link href={href} style={{ textDecoration: 'none' }}>
          {button}
        </Link>
      )}
      {open && (
        <Box sx={{ position: 'absolute', left: 0, top: HeaderHeight, width: '100%' }}>
          <Container maxWidth="xl">
            <Card margin={0}>{children}</Card>
          </Container>
        </Box>
      )}
    </>
  );
};
