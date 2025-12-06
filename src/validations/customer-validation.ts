import { assertString } from "./validation";

export interface CustomerCreateInput {
  name: string;
  phone: string;
}

export interface CustomerUpdateInput {
  name?: string;
  phone?: string;
}

export function validateCustomerCreate(body: any): CustomerCreateInput {
  assertString("name", body.name);
  assertString("phone", body.phone);

  return {
    name: body.name.trim(),
    phone: body.phone.trim(),
  };
}

export function validateCustomerUpdate(body: any): CustomerUpdateInput {
  const result: CustomerUpdateInput = {};

  if (body.name !== undefined) {
    assertString("name", body.name);
    result.name = body.name.trim();
  }

  if (body.phone !== undefined) {
    assertString("phone", body.phone);
    result.phone = body.phone.trim();
  }

  return result;
}
