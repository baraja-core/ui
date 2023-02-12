import { useContext } from 'react';
import { localStorageKey, Theme, ThemeContext } from '../../core/ThemeContext';
import { IconButton } from '@mui/material';
import { Color } from '../../palette';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';

export const ThemeSwitch = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <IconButton
      onClick={() => {
        const newTheme = theme === Theme.Light ? Theme.Dark : Theme.Light;
        if (typeof localStorage !== 'undefined') localStorage.setItem(localStorageKey, newTheme);
        setTheme(newTheme);
      }}
    >
      {theme === Theme.Light ? <DarkModeIcon /> : <LightModeIcon sx={{ color: Color.prideYellow }} />}
    </IconButton>
  );
};
