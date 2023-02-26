import { FC, ReactNode, useEffect, useState } from 'react';
import { Box, Typography } from '@mui/material';
import { DocumentationEndpointAction } from '../../core/documentation/types';
import { ApiDocumentationResponseBadge } from './ApiDocumentationResponseBadge';
import { ApiDocumentationBoxParameters } from './ApiDocumentationBoxParameters';
import { ApiDocumentationBoxHeader } from './ApiDocumentationBoxHeader';

interface ApiDocumentationBoxProps {
  route: string;
  action: DocumentationEndpointAction;
  activeAction?: string;
  actions?: ReactNode[];
}

export const ApiDocumentationBox: FC<ApiDocumentationBoxProps> = ({ route, action, activeAction, actions }) => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(activeAction ? activeAction === action.route : false);
  }, [activeAction]);

  return (
    <Box sx={{ margin: '1em 0', border: '1px solid rgba(0,0,0,.125)', borderRadius: '.25rem', background: 'white' }}>
      <ApiDocumentationBoxHeader route={route} action={action} actions={actions} open={open} setOpen={setOpen} />
      {open && (
        <Box sx={{ padding: '1em' }}>
          {action.description && (
            <>
              <p style={{ whiteSpace: 'pre', lineHeight: '1.5', margin: 0 }}>{action.description}</p>
              <Box sx={{ borderTop: '1px solid #ccc', margin: '1.5em 0' }} />
            </>
          )}
          <Typography sx={{ fontWeight: 'bold' }}>
            {action.httpMethod === 'GET' ? 'Query' : 'Body'} parameters
            {action.parametersDeclaringType && (
              <>
                {' (declared in '}
                <Typography component="span" sx={{ background: '#eee', borderRadius: '6px', padding: '2px 4px' }}>
                  {action.parametersDeclaringType}
                </Typography>
                )
              </>
            )}
            :
          </Typography>
          <ApiDocumentationBoxParameters action={action} />
          <ApiDocumentationResponseBadge action={action} />
        </Box>
      )}
    </Box>
  );
};
