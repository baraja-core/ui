import { FC } from 'react';
import { Box, CircularProgress } from '@mui/material';
import { ApiDocumentation as ApiDocumentationEntity } from '../../core/documentation/types';
import { ApiDocumentationApp } from './ApiDocumentationApp';

type ApiDocumentationProps = {
  documentation: ApiDocumentationEntity;
};

export const ApiDocumentation: FC<ApiDocumentationProps> = ({ documentation }) => (
  <Box>
    {documentation ? (
      <ApiDocumentationApp endpoints={documentation.endpoints} />
    ) : (
      <Box sx={{ textAlign: 'center', margin: '8em 1em' }}>
        <CircularProgress />
      </Box>
    )}
  </Box>
);
