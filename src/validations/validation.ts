import { ResponseError } from "../error/response-error";

export function assertString(field: string, value: unknown) {
  if (typeof value !== "string" || !value.trim()) {
    throw new ResponseError(400, `${field} is required and must be a non-empty string`);
  }
}

export function assertBoolean(field: string, value: unknown) {
  if (typeof value !== "boolean") {
    throw new ResponseError(400, `${field} must be a boolean`);
  }
}

export function assertPositiveInt(field: string, value: unknown) {
  if (typeof value !== "number" || !Number.isInteger(value) || value <= 0) {
    throw new ResponseError(400, `${field} must be a positive integer`);
  }
}
