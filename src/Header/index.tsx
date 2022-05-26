import { FC, ReactNode } from 'react';
import { Box } from '@mui/system';
import Logo from '../Logo';
import { Col, Container, Row } from 'react-bootstrap';
import Link from 'next/link';
import palette from '../palette';

interface HeaderProps {
  children?: ReactNode;
}

const Header: FC<HeaderProps> = ({ children }) => (
  <Box
    sx={{
      height: '50px',
      padding: '.6em',
      borderBottom: '1px solid black',
      background: palette.color.dark,
      color: 'white',
    }}
  >
    <Container>
      <Row>
        <Col xs={3} sm={2} lg={1} style={{ paddingTop: '.15em' }}>
          <Link href="/">
            <Logo height={20} />
          </Link>
        </Col>
        <Col>
          <Box sx={{ textAlign: 'right' }}>{children}</Box>
        </Col>
      </Row>
    </Container>
  </Box>
);

export default Header;
