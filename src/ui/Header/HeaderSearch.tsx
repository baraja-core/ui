import { FC, useEffect, useState } from 'react';
import { Box, IconButton, InputAdornment, TextField } from '@mui/material';
import { SearchConfiguration } from '../../core/search/types';
import SearchIcon from '@mui/icons-material/Search';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

type HeaderSearchProps = {
  configuration: SearchConfiguration;
  onClose: () => void;
};

export const HeaderSearch: FC<HeaderSearchProps> = ({ configuration, onClose }) => {
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const handleEsc = (event: { keyCode?: number }) => {
      if (event.keyCode === 27) onClose();
    };
    window.addEventListener('keydown', handleEsc);
    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  }, []);

  return (
    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'right', width: '100%' }}>
      <Box sx={{ display: 'flex', width: '100%' }}>
        <Box>
          <IconButton onClick={() => onClose()} sx={{ p: '.15em', mr: 1 }}>
            <ArrowBackIcon />
          </IconButton>
        </Box>
        <Box sx={{ width: '100%' }}>
          <form action={`/${configuration.serpUrl?.replace(/^\//, '')}`}>
            <TextField
              fullWidth
              autoFocus
              autoComplete="off"
              value={searchQuery}
              name={configuration.queryParameterName || 'q'}
              onChange={(e) => setSearchQuery(String(e.target.value))}
              size="small"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start" sx={{ ['@media (max-width:780px)']: { display: 'none' } }}>
                    <SearchIcon />
                  </InputAdornment>
                ),
                style: { height: '2em', width: '100%' },
              }}
            />
          </form>
        </Box>
      </Box>
    </Box>
  );
};
