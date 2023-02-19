import { FC, ReactNode } from 'react';
import { Box, Container } from '@mui/material';
import { BrjLogo } from '../BrjLogo';
import { Color } from '../../palette';
import { Theme } from '../../core/ThemeContext';

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
    <Container maxWidth="xl">
      <Box sx={{ display: 'flex' }}>
        <Box sx={{ display: 'flex', marginRight: '.5em' }}>
          <a href="/" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <BrjLogo height={20} theme={Theme.Dark} />
          </a>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'right', width: '100%' }}>{children}</Box>
      </Box>
    </Container>
  </Box>
);
