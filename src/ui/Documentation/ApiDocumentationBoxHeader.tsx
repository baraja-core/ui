import { FC, MouseEvent, ReactNode } from 'react';
import { Box, IconButton } from '@mui/material';
import { ApiDocumentationEndpointAction } from '../../core/documentation/types';
import InsertLinkIcon from '@mui/icons-material/InsertLink';
import UnfoldMoreIcon from '@mui/icons-material/UnfoldMore';
import UnfoldLessIcon from '@mui/icons-material/UnfoldLess';

interface ApiDocumentationBoxHeaderProps {
  route: string;
  action: ApiDocumentationEndpointAction;
  actions?: ReactNode[];
  open: boolean;
  setOpen: (open: boolean) => void;
}

const variantByAction = [
  { code: 'GET', variant: '#3F51B5' },
  { code: 'POST', variant: '#4CAF50' },
  { code: 'CREATE', variant: '#4CAF50' },
  { code: 'PUT', variant: '#FF9800' },
  { code: 'PATCH', variant: '#FF9800' },
  { code: 'DELETE', variant: '#fd3131' },
];

export const ApiDocumentationBoxHeader: FC<ApiDocumentationBoxHeaderProps> = ({
  route,
  action,
  actions,
  open,
  setOpen,
}) => {
  const handleEndpointLink = (e: MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    window.location.href = `${window.location.href.replace(/^(.+)#(.*)$/, '$1')}#${route}`;
  };

  return (
    <Box
      sx={{
        display: 'flex',
        background: 'rgba(0,0,0,.03)',
        padding: '.75em',
        borderBottom: '1px solid rgba(0,0,0,.125)',
        ':hover': { cursor: 'pointer' },
      }}
      onClick={() => setOpen(!open)}
    >
      <Box sx={{ display: 'flex', width: '80%' }}>
        <Box>
          <Box
            sx={{
              display: 'flex',
              color: 'white',
              background:
                variantByAction.find((httpVariant) => httpVariant.code === action.httpMethod)?.variant ?? '#007bff',
              fontSize: '10pt',
              paddingRight: '.6em',
              paddingLeft: '.6em',
              borderRadius: '10rem',
              alignItems: 'center',
            }}
          >
            {action.httpMethod}
          </Box>
        </Box>
        <Box sx={{ display: 'flex', marginLeft: 2 }}>
          <IconButton onClick={(e) => handleEndpointLink(e)} sx={{ marginRight: '.25em' }}>
            <InsertLinkIcon />
          </IconButton>
          <Box sx={{ color: '#555', fontFamily: 'monospace', borderBottom: '1px dotted #555' }}>api/v1/{route}</Box>
        </Box>
      </Box>
      <Box style={{ width: '20%', textAlign: 'right' }}>
        <Box>
          <IconButton>{open ? <UnfoldLessIcon /> : <UnfoldMoreIcon />}</IconButton>
        </Box>
        <Box>{(actions ?? []).map((actionItem) => actionItem)}</Box>
      </Box>
    </Box>
  );
};
