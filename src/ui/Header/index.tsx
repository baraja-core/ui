import { FC, ReactNode, useEffect, useState } from 'react';
import { Box, Container, IconButton } from '@mui/material';
import { HeaderHeight } from './types';
import { HeaderSearchIcon } from './HeaderSearchIcon';
import { HeaderIdentity } from './HeaderIdentity';
import { HeaderSearch } from './HeaderSearch';
import { ThemeSwitch } from '../ThemeSwitch';
import { BrjLogo } from '../BrjLogo';
import { Card } from '../Card';
import { SearchConfiguration } from '../../core/search/types';
import { Color } from '../../palette';
import { Theme } from '../../core/theme/types';
import { useRouter } from 'next/router';
import Link from 'next/link';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import Collapse from '@mui/material/Collapse';

type HeaderProps = {
  children?: ReactNode | ReactNode[];
  appName?: string;
  orientation?: 'left' | 'right';
  search?: SearchConfiguration;
  enableLogin?: boolean;
};

export const Header: FC<HeaderProps> = ({ children, appName, orientation, search, enableLogin }) => {
  const { asPath, events } = useRouter();
  const [isSearchOpen, setSearchOpen] = useState(false);
  const [isMenuOpen, setMenuOpen] = useState(false);

  const closeHamburger = () => setMenuOpen(false);
  const isSearchActive = Boolean(search && search?.serpUrl === asPath.replace(/^\/?(.+?)\?(.*)$/, '$1'));

  useEffect(() => {
    events.on('routeChangeStart', closeHamburger);
    return () => events.off('routeChangeStart', closeHamburger);
  }, [events]);

  useEffect(() => {
    if (!isSearchActive) return;
    setSearchOpen(true);
  }, [isSearchActive]);

  useEffect(() => {
    if (asPath === '/') setSearchOpen(false);
  }, [asPath]);

  return (
    <Box sx={{ height: HeaderHeight, padding: '.6em 0', background: Color.dark, color: 'white' }}>
      <Container maxWidth="xl">
        <Box sx={{ display: 'flex' }}>
          <Box sx={{ display: 'flex', marginRight: '.5em', ['@media (max-width:300px)']: { display: 'none' } }}>
            <Link href="/">
              <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
                <BrjLogo height={20} theme={Theme.Dark} />
              </Box>
            </Link>
          </Box>
          {appName && (
            <Box sx={{ display: 'flex', alignItems: 'center', fontSize: '14pt', flexShrink: 0, p: '0 1em' }}>
              {appName}
            </Box>
          )}
          {search && isSearchOpen ? (
            <HeaderSearch configuration={search} onClose={() => setSearchOpen(false)} />
          ) : (
            <>
              <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: orientation ?? 'left', width: '100%' }}>
                <Box sx={{ ['@media (max-width:700px)']: { display: 'none' } }}>{children}</Box>
              </Box>
              {search && (
                <Box sx={{ display: 'flex', alignItems: 'stretch' }}>
                  <HeaderSearchIcon onOpen={() => setSearchOpen(true)} />
                </Box>
              )}
              {enableLogin && (
                <Box sx={{ display: 'flex', alignItems: 'stretch' }}>
                  <HeaderIdentity />
                </Box>
              )}
              <IconButton
                sx={{ p: '.15em', mx: 1, ['@media (min-width:701px)']: { display: 'none' } }}
                onClick={() => setMenuOpen(!isMenuOpen)}
              >
                <MenuIcon sx={{ color: Color.white }} />
              </IconButton>
              <ThemeSwitch header={true} />
            </>
          )}
        </Box>
      </Container>
      <Box
        sx={{
          position: 'absolute',
          left: 0,
          top: 0,
          width: '100%',
          zIndex: 9999,
          ['@media (min-width:701px)']: { display: 'none' },
        }}
      >
        <Collapse in={isMenuOpen}>
          <Card background={Color.blackBackground}>
            <Box sx={{ textAlign: 'right', px: 2, pt: 1 }}>
              <IconButton sx={{ p: '.15em' }} onClick={() => setMenuOpen(false)}>
                <CloseIcon sx={{ color: Color.white }} />
              </IconButton>
            </Box>
            {Object.entries(Array.isArray(children) ? children : [children]).map(([key, item]) => (
              <Box key={key} sx={{ my: 2 }}>
                {item}
              </Box>
            ))}
          </Card>
        </Collapse>
      </Box>
    </Box>
  );
};
