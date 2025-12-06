import { assertBoolean, assertString } from "./validation";

export interface RestaurantCreateInput {
  name: string;
  description: string;
  isOpen: boolean;
}

export interface RestaurantUpdateInput {
  name?: string;
  description?: string;
  isOpen?: boolean;
}

export function validateRestaurantCreate(body: any): RestaurantCreateInput {
  assertString("name", body.name);
  assertString("description", body.description);

  const isOpen =
    typeof body.isOpen === "boolean" ? body.isOpen : true;

  return {
    name: body.name.trim(),
    description: body.description.trim(),
    isOpen,
  };
}

export function validateRestaurantUpdate(body: any): RestaurantUpdateInput {
  const result: RestaurantUpdateInput = {};

  if (body.name !== undefined) {
    assertString("name", body.name);
    result.name = body.name.trim();
  }

  if (body.description !== undefined) {
    assertString("description", body.description);
    result.description = body.description.trim();
  }

  if (body.isOpen !== undefined) {
    assertBoolean("isOpen", body.isOpen);
    result.isOpen = body.isOpen;
  }

  return result;
}
