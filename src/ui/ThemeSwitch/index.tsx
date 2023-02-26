import { useContext } from 'react';
import { IconButton } from '@mui/material';
import { GlobalAppState } from '../../core/shareObject/globalAppState';
import { Color } from '../../palette';
import { Theme } from '../../core/theme/types';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';

export const ThemeSwitch = () => {
  const { getContext, setContext } = useContext(GlobalAppState);
  const theme = getContext().theme;

  return (
    <IconButton onClick={() => setContext({ theme: theme === Theme.Light ? Theme.Dark : Theme.Light })}>
      {theme === Theme.Light ? <DarkModeIcon /> : <LightModeIcon sx={{ color: Color.prideYellow }} />}
    </IconButton>
  );
};
