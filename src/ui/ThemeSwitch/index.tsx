import { FC, useContext } from 'react';
import { IconButton } from '@mui/material';
import { GlobalAppState } from '../../core/shareObject/globalAppState';
import { Color } from '../../palette';
import { Theme } from '../../core/theme/types';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';

type ThemeSwitchProps = {
  header?: boolean;
};

export const ThemeSwitch: FC<ThemeSwitchProps> = ({ header }) => {
  const { getContext, setContext } = useContext(GlobalAppState);
  const theme = getContext().theme;

  return (
    <IconButton
      sx={{ ...(header ? { p: '.15em', mx: 1, ['@media (max-width:701px)']: { display: 'none' } } : {}) }}
      onClick={() => setContext({ theme: theme === Theme.Light ? Theme.Dark : Theme.Light })}
    >
      {theme === Theme.Light ? (
        <DarkModeIcon sx={{ ...(header ? { color: Color.white } : {}) }} />
      ) : (
        <LightModeIcon sx={{ color: Color.prideYellow }} />
      )}
    </IconButton>
  );
};
