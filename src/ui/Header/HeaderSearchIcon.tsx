import { FC } from 'react';
import { IconButton } from '@mui/material';
import { Color } from '../../palette';
import SearchIcon from '@mui/icons-material/Search';

type HeaderSearchIconProps = {
  onOpen: () => void;
};

export const HeaderSearchIcon: FC<HeaderSearchIconProps> = ({ onOpen }) => (
  <IconButton onClick={() => onOpen()} sx={{ p: '.15em', mr: 1 }}>
    <SearchIcon sx={{ color: Color.white }} />
  </IconButton>
);
