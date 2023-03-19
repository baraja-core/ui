import { FC, useEffect, useState } from 'react';
import { Box, IconButton, InputAdornment, TextField } from '@mui/material';
import { SearchConfiguration } from '../../core/search/types';
import { Color } from '../../palette';
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';
import { useRouter } from 'next/router';

type HeaderSearchProps = {
  configuration: SearchConfiguration;
  onClose: () => void;
};

export const HeaderSearch: FC<HeaderSearchProps> = ({ configuration, onClose }) => {
  const { asPath, query } = useRouter();
  const [searchQuery, setSearchQuery] = useState('');
  const isSearchActive = Boolean(configuration?.serpUrl === asPath.replace(/^\/?(.+?)\?(.*)$/, '$1'));
  const queryParam = configuration.queryParameterName || 'q';

  useEffect(() => {
    if (!isSearchActive) return;
    setSearchQuery(asPath === '/' ? '' : String(query[queryParam] || ''));
  }, [isSearchActive]);

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
        <Box sx={{ width: '100%' }}>
          <form action={`/${configuration.serpUrl?.replace(/^\//, '')}`}>
            <TextField
              fullWidth
              autoFocus
              autoComplete="off"
              value={searchQuery}
              name={queryParam}
              onChange={(e) => setSearchQuery(String(e.target.value))}
              size="small"
              sx={{ input: { color: Color.white }, border: `1px solid ${Color.white}`, borderRadius: 1 }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start" sx={{ ['@media (max-width:780px)']: { display: 'none' } }}>
                    <SearchIcon sx={{ color: Color.white }} />
                  </InputAdornment>
                ),
                style: { height: '2em', width: '100%' },
              }}
            />
          </form>
        </Box>
        <Box>
          <IconButton onClick={() => onClose()} sx={{ p: '.15em', ml: 1 }}>
            <CloseIcon sx={{ color: Color.white }} />
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
};
