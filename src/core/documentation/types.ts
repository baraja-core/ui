export enum HttpMethod {
  GET = 'GET',
  POST = 'POST',
  CREATE = 'CREATE',
  PUT = 'PUT',
  PATCH = 'PATCH',
  DELETE = 'DELETE',
}

export type DocumentationEndpoint = {
  route: string;
  class: string;
  name: string;
  description: string | null;
  public: boolean;
  actions: DocumentationEndpointAction[];
};

export type DocumentationEndpointAction = {
  name: string;
  method: string;
  route: string;
  httpMethod: string;
  methodName: string;
  description: string | null;
  roles: string[];
  throws: string[];
  parameters: DocumentationEndpointActionParameter[];
  parametersDeclaringType?: string;
  returnType?: string;
  responses: DocumentationEndpointActionResponse[];
};

export type DocumentationEndpointActionResponse = {
  httpCode: number;
  message?: string;
  properties: DocumentationEndpointActionResponseProperty[];
  typescriptDefinition?: string;
};

export type DocumentationEndpointActionResponseProperty = {
  name: string;
  type: string;
  description?: string;
  annotation?: string;
  nullable: boolean;
  children: DocumentationEndpointActionResponseProperty[];
};

export type DocumentationEndpointActionParameter = {
  position: number;
  name: string;
  type: string;
  default: any | null;
  required: boolean;
  description: string | null;
};

export type Documentation = {
  endpoints: DocumentationEndpoint[];
};
