import { FC } from 'react';
import { Paper } from '@mui/material';
import { ApiDocumentationEndpoint as ApiDocumentationEndpointEntity } from '../../core/documentation/types';
import { ApiDocumentationVisibility, EndpointVisibility } from './ApiDocumentationVisibility';
import { ApiDocumentationBox } from './ApiDocumentationBox';

type RestApiDocumentationEndpointProps = {
  endpoint: ApiDocumentationEndpointEntity;
  activeAction?: string;
};

export const ApiDocumentationEndpoint: FC<RestApiDocumentationEndpointProps> = ({ endpoint, activeAction }) => (
  <>
    <h1 style={{ marginTop: 0 }}>{endpoint.name}</h1>
    {endpoint.description && <Paper sx={{ p: 2, marginBottom: '1em' }}>{endpoint.description}</Paper>}
    <ApiDocumentationVisibility visibility={endpoint.public ? EndpointVisibility.Public : EndpointVisibility.Private} />
    {Object.entries(endpoint.actions).map(([key, action]) => (
      <ApiDocumentationBox
        key={`${endpoint.route}_${key}`}
        action={action}
        activeAction={activeAction}
        route={`${endpoint.route}${action.route !== 'default' ? `/${action.route}` : ''}`}
      />
    ))}
  </>
);
