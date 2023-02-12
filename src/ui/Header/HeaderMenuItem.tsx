import { Box } from '@mui/system';
import { FC } from 'react';
import { Color } from '../../palette';
import { useRouter } from 'next/router';
import Link from 'next/link';

interface HeaderMenuItemProps {
  label: string;
  href: string;
  selected?: boolean;
}

const HeaderMenuItem: FC<HeaderMenuItemProps> = ({ label, href, selected }) => {
  const { asPath } = useRouter();
  const useBorder = (color: string) => `2px solid ${selected || href === asPath ? Color.orange : color}`;

  return (
    <Link href={href}>
      <Box
        component="span"
        sx={{
          textDecoration: 'none',
          margin: '0 .5em',
          padding: '.25em',
          color: 'white',
          borderBottom: useBorder('#555'),
          ':hover': {
            borderBottom: useBorder('white'),
          },
        }}
      >
        {label}
      </Box>
    </Link>
  );
};

export default HeaderMenuItem;
