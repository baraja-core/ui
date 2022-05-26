import { FC, ReactNode } from 'react';
import {
  CardContent,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material';
import { Box } from '@mui/system';
import { Badge, Card, Col, Container, Row } from 'react-bootstrap';
import { Error } from '@mui/icons-material';
import CardHeader from 'react-bootstrap/CardHeader';
import palette from '../palette';

export interface DocumentationEndpointAction {
  name: string;
  method: string;
  route: string;
  httpMethod: string;
  methodName: string;
  description: string | null;
  roles: string[];
  throws: string[];
  parameters: DocumentationEndpointActionParameter[];
}

export interface DocumentationEndpointActionParameter {
  position: number;
  name: string;
  type: string;
  default: any | null;
  required: boolean;
  description: string | null;
}

interface ApiDocumentationBoxProps {
  route: string;
  action: DocumentationEndpointAction;
  actions?: ReactNode[];
}

const variantByAction = [
  { code: 'GET', variant: 'primary' },
  { code: 'POST', variant: 'success' },
  { code: 'CREATE', variant: 'success' },
  { code: 'PUT', variant: 'warning' },
  { code: 'PATCH', variant: 'warning' },
  { code: 'DELETE', variant: 'danger' },
];

const paramsCell = { padding: '.25em' };

const ApiDocumentationBox: FC<ApiDocumentationBoxProps> = ({ route, action, actions }) => (
  <Card style={{ margin: '1em 0' }}>
    <CardHeader>
      <Container fluid style={{ padding: 0 }}>
        <Row>
          <Col>
            <Badge
              bg={variantByAction.find((httpVariant) => httpVariant.code === action.httpMethod)?.variant ?? 'primary'}
              pill
            >
              {action.httpMethod}
            </Badge>
            <Box component="code" sx={{ marginLeft: 2 }}>
              api/v1/{route}
            </Box>
          </Col>
          <Col style={{ textAlign: 'right' }}>{(actions ?? []).map((actionItem) => actionItem)}</Col>
        </Row>
      </Container>
    </CardHeader>
    <CardContent>
      {action.description && (
        <>
          <p style={{ whiteSpace: 'pre' }}>{action.description}</p>
          <hr />
        </>
      )}
      <Typography sx={{ fontWeight: 'bold' }}>{action.httpMethod === 'GET' ? 'Query' : 'Body'} parameters:</Typography>
      {action.parameters.length > 0 ? (
        <TableContainer>
          <Table size="small">
            <TableHead>
              <TableRow>
                <TableCell sx={{ ...paramsCell, width: '2em' }}>#</TableCell>
                <TableCell sx={paramsCell}>Name</TableCell>
                <TableCell sx={paramsCell}>Type</TableCell>
                <TableCell sx={paramsCell}>Default</TableCell>
                <TableCell sx={paramsCell}>Description</TableCell>
                <TableCell sx={{ ...paramsCell, width: '120px' }} />
              </TableRow>
            </TableHead>
            <TableBody>
              {Object.entries(action.parameters).map(([key, parameter]) => (
                <TableRow key={key}>
                  <TableCell sx={{ ...paramsCell, color: '#6c757d' }}>{Number(key) + 1}</TableCell>
                  <TableCell sx={paramsCell}>{parameter.name}</TableCell>
                  <TableCell sx={paramsCell}>{parameter.type}</TableCell>
                  <TableCell sx={paramsCell}>
                    {parameter.default && (
                      <code>
                        {typeof parameter.default === 'string' ? parameter.default : JSON.stringify(parameter.default)}
                      </code>
                    )}
                  </TableCell>
                  <TableCell sx={paramsCell}>{parameter.description}</TableCell>
                  <TableCell sx={{ ...paramsCell, textAlign: 'right' }}>
                    {parameter.required ? (
                      <Typography
                        component="span"
                        sx={{ color: palette.color.red, textAlign: 'right', fontSize: '10pt' }}
                      >
                        <Error sx={{ fontSize: '14pt', marginRight: '4px' }} />
                        Required
                      </Typography>
                    ) : (
                      <Typography component="i" sx={{ color: '#6c757d', fontSize: '10pt' }}>
                        optional
                      </Typography>
                    )}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      ) : (
        <Typography sx={{ fontStyle: 'italic', marginTop: 1 }}>No parameters.</Typography>
      )}
    </CardContent>
  </Card>
);

export default ApiDocumentationBox;
