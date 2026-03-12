export interface StrapiFieldError {
  path: string[];
  message: string;
  name?: string;
}

export interface StrapiErrorDetails {
  errors?: StrapiFieldError[];
}

export interface StrapiErrorPayload {
  status: number;
  name: string;
  message: string;
  details?: StrapiErrorDetails;
}

export interface StrapiErrorResponse {
  data: null;
  error: StrapiErrorPayload;
}
