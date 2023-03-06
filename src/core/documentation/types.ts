export enum HttpMethod {
  GET = 'GET',
  POST = 'POST',
  CREATE = 'CREATE',
  PUT = 'PUT',
  PATCH = 'PATCH',
  DELETE = 'DELETE',
}

export type ApiDocumentationEndpoint = {
  route: string;
  class: string;
  name: string;
  description: string | null;
  public: boolean;
  actions: ApiDocumentationEndpointAction[];
};

export type ApiDocumentationEndpointAction = {
  name: string;
  method: string;
  route: string;
  httpMethod: string;
  methodName: string;
  description: string | null;
  roles: string[];
  throws: string[];
  parameters: ApiDocumentationEndpointActionParameter[];
  parametersDeclaringType?: string;
  returnType?: string;
  responses: ApiDocumentationEndpointActionResponse[];
};

export type ApiDocumentationEndpointActionResponse = {
  httpCode: number;
  message?: string;
  properties: ApiDocumentationEndpointActionResponseProperty[];
  typescriptDefinition?: string;
};

export type ApiDocumentationEndpointActionResponseProperty = {
  name: string;
  type: string;
  description?: string;
  annotation?: string;
  nullable: boolean;
  children: ApiDocumentationEndpointActionResponseProperty[];
};

export type ApiDocumentationEndpointActionParameter = {
  position: number;
  name: string;
  type: string;
  default: any | null;
  required: boolean;
  description: string | null;
};

export type ApiDocumentation = {
  endpoints: ApiDocumentationEndpoint[];
};
