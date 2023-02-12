import { FC, ReactNode } from 'react';
import { Box, Container } from '@mui/material';
import { BrjLogo } from '../BrjLogo';
import { Color } from '../../palette';
import Link from 'next/link';

interface HeaderProps {
  children?: ReactNode;
}

// TODO: xs={3} sm={2} lg={1}

export const Header: FC<HeaderProps> = ({ children }) => (
  <Box
    sx={{
      height: '50px',
      padding: '.6em',
      borderBottom: '1px solid black',
      background: Color.dark,
      color: 'white',
    }}
  >
    <Container>
      <Box sx={{ paddingTop: '.15em' }}>
        <Link href="/">
          <BrjLogo height={20} />
        </Link>
      </Box>
      <Box>
        <Box sx={{ textAlign: 'right' }}>{children}</Box>
      </Box>
    </Container>
  </Box>
);
