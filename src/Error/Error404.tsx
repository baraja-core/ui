import { Container } from 'react-bootstrap';
import palette from '../palette';
import { Box } from '@mui/system';

const Error404 = () => {
  const tempLink = document.createElement('a');
  tempLink.href = window.location.href;

  return (
    <Container>
      <Box sx={{ padding: '4em 0' }}>
        <h1 style={{ color: palette.color.prideRed, fontSize: 100 }}>404</h1>
        <p>
          <strong>404</strong>. <ins style={{ color: '#777', textDecoration: 'none' }}>That’s an error.</ins>
        </p>
        <p>
          The requested URL <code>{tempLink.pathname}</code> was not found on this server.
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

export default Error404;
