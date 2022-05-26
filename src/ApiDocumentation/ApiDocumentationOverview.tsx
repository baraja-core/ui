import { FC } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { DocumentationEndpoint } from './api';
import MenuItem from '@mui/material/MenuItem';

interface RestApiDocumentationOverviewProps {
  endpoints: DocumentationEndpoint[];
  setEndpoint: (endpoint?: string) => void;
}

const ApiDocumentationOverview: FC<RestApiDocumentationOverviewProps> = ({ endpoints, setEndpoint }) => (
  <Container fluid>
    <Row>
      <h1>Welcome to REST API Documentation</h1>
      {endpoints.map((endpoint) => (
        <Col key={endpoint.class} sm={4}>
          <Card style={{ marginBottom: '1em' }} onClick={() => setEndpoint(endpoint.class)}>
            <MenuItem>
              {endpoint.name}
              {endpoint.description && <p>{endpoint.description}</p>}
            </MenuItem>
          </Card>
        </Col>
      ))}
    </Row>
  </Container>
);

export default ApiDocumentationOverview;
