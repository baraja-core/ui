import { FC } from 'react';
import { Box, CircularProgress } from '@mui/material';
import { Documentation } from '../../core/documentation/types';
import { ApiDocumentationApp } from './ApiDocumentationApp';

interface ApiDocumentationProps {
  documentation: Documentation;
}

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
