import { FC, ReactNode, useContext } from 'react';
import { Box, Container, IconButton } from '@mui/material';
import { GlobalAppState } from '../../core/shareObject/globalAppState';
import { Theme } from '../../core/theme/types';
import { Color } from '../../palette';
import { FooterFlag } from './FooterFlag';
import { BrjLogo } from '../BrjLogo';
import { FooterServiceStatus } from './FooterServiceStatus';
import { FooterSwitcher } from './FooterSwitcher';
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';

type FooterProps = {
  children: ReactNode;
};

export const Footer: FC<FooterProps> = ({ children }) => {
  const { getContext } = useContext(GlobalAppState);
  const { theme, locale } = getContext();

  return (
    <Box sx={{ marginTop: 'auto', paddingTop: '1.5em' }}>
      <Container>
        <Box sx={{ width: '250px', marginLeft: 'auto' }}>
          <FooterFlag />
        </Box>
      </Container>
      <Box
        sx={{
          borderTop: `1px solid ${theme === Theme.Light ? '#EBEBEB' : Color.grayDarkBorder}`,
          background: theme === Theme.Light ? Color.grayLight : Color.grayDark,
          padding: '1em 2em',
        }}
      >
        {children}
        <Container>
          <Box
            sx={{
              display: 'flex',
              maxWidth: '75em',
              margin: '1em auto',
              ['@media (max-width:780px)']: { flexWrap: 'wrap' },
            }}
          >
            <Box sx={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'left' }}>
              <FooterServiceStatus />
            </Box>
            <Box
              sx={{
                padding: '0 2em',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                ['@media (max-width:780px)']: { width: '100%' },
              }}
            >
              <Box sx={{ textAlign: 'center', fontSize: '10pt', padding: '1em 0' }}>
                <Box>
                  <a href={`https://brj.cz${locale ? `?locale=${encodeURIComponent(locale)}` : ''}`} target="_blank">
                    <BrjLogo height={20} />
                  </a>
                </Box>
                <Box>{new Date().getFullYear()}</Box>
              </Box>
            </Box>
            <Box sx={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'right' }}>
              <FooterSwitcher />
              <IconButton onClick={() => window.open('https://github.com/janbarasek', '_blank')}>
                <GitHubIcon />
              </IconButton>
              <IconButton onClick={() => window.open('https://facebook.com/janbarasek', '_blank')}>
                <FacebookIcon />
              </IconButton>
              <IconButton onClick={() => window.open('https://www.youtube.com/@JanBarasek5249/videos', '_blank')}>
                <YouTubeIcon />
              </IconButton>
            </Box>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};
