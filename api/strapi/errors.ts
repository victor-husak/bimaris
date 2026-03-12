import type { StrapiErrorResponse } from "./strapi-error.types";

export class StrapiError extends Error {
  status: number;
  response?: StrapiErrorResponse;

  constructor(message: string, status: number, response?: StrapiErrorResponse) {
    super(message);
    this.name = "StrapiError";
    this.status = status;
    this.response = response;
  }
}

export class StrapiAuthError extends StrapiError {
  constructor(response?: StrapiErrorResponse) {
    super("Unauthorized", 401, response);
    this.name = "StrapiAuthError";
  }
}

export class StrapiNotFoundError extends StrapiError {
  constructor(response?: StrapiErrorResponse) {
    super("Not Found", 404, response);
    this.name = "StrapiNotFoundError";
  }
}
