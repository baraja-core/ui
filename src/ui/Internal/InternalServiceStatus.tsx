import Link from 'next/link';
import { FC } from 'react';
import { Box } from '@mui/material';
import { Card } from '../Card';
import { Color } from '../../palette';

type InternalServiceStatusProps = {
  status: 'ok' | 'error';
};

export const InternalServiceStatus: FC<InternalServiceStatusProps> = ({ status }) => {
  const color = status === 'ok' ? Color.prideGreen : Color.prideRed;
  const message = status === 'ok' ? 'All systems normal.' : 'Some services outage.';

  return (
    <Box sx={{ cursor: 'pointer' }} onClick={() => window.open('https://status.baraja.cz', '_blank')}>
      <Card padding={1}>
        <Box sx={{ position: 'absolute', zIndex: -1 }}>
          <Link href="https://status.baraja.cz" target="_blank">
            {`BRJ system status: ${message}`}
          </Link>
        </Box>
        <Box sx={{ display: 'flex' }}>
          <Box>Status:</Box>
          <Box>
            <Box
              sx={{
                flexShrink: 0,
                display: 'inline-block',
                width: '10px',
                height: '10px',
                borderRadius: '100%',
                backgroundColor: color,
                margin: '0 7px',
              }}
            />
          </Box>
          <Box sx={{ color: color }}>{message}</Box>
        </Box>
      </Card>
    </Box>
  );
};
