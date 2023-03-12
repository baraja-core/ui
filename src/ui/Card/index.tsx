import { FC, ReactNode, useContext } from 'react';
import { Box } from '@mui/material';
import { GlobalAppState } from '../../core/shareObject/globalAppState';
import { Theme } from '../../core/theme/types';
import { Color } from '../../palette';

type CardProps = {
  children?: ReactNode;
  padding?: number;
  margin?: string | number;
  title?: ReactNode | string;
  footer?: ReactNode | string;
  icon?: ReactNode;
  background?: string;
};

export const Card: FC<CardProps> = ({ children, padding, margin, title, footer, icon, background }) => {
  const { getContext } = useContext(GlobalAppState);
  const theme = getContext().theme;

  const content = <Box sx={{ padding: padding ?? 0 }}>{children}</Box>;

  return (
    <Box
      sx={{
        border: `1px solid ${theme === Theme.Light ? Color.gray : Color.grayDarkBorder}`,
        borderRadius: '.25rem',
        margin: margin ?? '.75em 0',
        background: background ?? (theme === Theme.Light ? Color.white : Color.blackBackground),
      }}
    >
      {title && (
        <Box
          sx={{
            display: 'flex',
            padding: '.25em .75em',
            borderTopLeftRadius: '.25rem',
            borderTopRightRadius: '.25rem',
            background: theme === Theme.Light ? Color.grayLight : Color.grayDark,
          }}
        >
          {icon && <Box sx={{ paddingRight: 1 }}>{icon}</Box>}
          <Box sx={{ width: '100%' }}>
            {typeof title === 'string' ? <h2 style={{ fontSize: '1.1rem', margin: 0 }}>{title}</h2> : title}
          </Box>
        </Box>
      )}
      {content}
      {footer && (
        <Box
          sx={{
            display: 'flex',
            padding: '.25em .75em',
            borderBottomLeftRadius: '.25rem',
            borderBottomRightRadius: '.25rem',
            background: theme === Theme.Light ? Color.grayLight : Color.grayDark,
          }}
        >
          <Box sx={{ width: '100%' }}>
            {typeof footer === 'string' ? <h2 style={{ fontSize: '1.1rem', margin: 0 }}>{footer}</h2> : footer}
          </Box>
        </Box>
      )}
    </Box>
  );
};
