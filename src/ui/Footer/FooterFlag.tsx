import { Box } from '@mui/material';
import { Color } from '../../palette';

export const FooterFlag = () => (
  <Box sx={{ overflow: 'auto' }}>
    {[Color.prideRed, Color.prideOrange, Color.prideYellow, Color.prideGreen, Color.prideBlue, Color.pridePurple].map(
      (color) => (
        <Box key={color} sx={{ background: color, height: 6, float: 'left', width: 'calc(100% / 6)' }} />
      )
    )}
  </Box>
);
