import { Container } from '@mui/material';
import { Box } from '@mui/system';
import { GlobalAppState } from '../../core/shareObject/globalAppState';
import { Theme } from '../../core/theme/types';
import { Color } from '../../palette';
import { FC, useContext } from 'react';

type Error404Props = {
  pathname?: string;
};

export const Error404: FC<Error404Props> = ({ pathname }) => {
  const { getContext } = useContext(GlobalAppState);

  return (
    <Container>
      <Box sx={{ padding: '4em 0' }}>
        <h1 style={{ color: Color.prideRed, fontSize: 100 }}>404</h1>
        <p>
          <strong>404</strong>. <ins style={{ color: '#777', textDecoration: 'none' }}>That’s an error.</ins>
        </p>
        <p>
          The requested URL
          <code
            style={{
              background: getContext().theme === Theme.Light ? '#ffeeee' : 'rgba(110, 118, 129, 0.4)',
              borderRadius: '5px',
              padding: '.2em .4em',
              margin: '0 .3em',
              fontFamily: 'monospace',
            }}
          >
            {pathname}
          </code>
          was not found on this server.
          <br />
          <ins style={{ color: '#777', textDecoration: 'none' }}>That’s all we know.</ins>
        </p>
        <p>
          <a href="/">Go home</a>
        </p>
      </Box>
    </Container>
  );
};
