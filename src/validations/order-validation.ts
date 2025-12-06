import { assertPositiveInt } from "./validation";
import { ResponseError } from "../error/response-error";

export interface OrderCreateInput {
  customerId: number;
  restaurantId: number;
  itemCount: number;
}

export function validateOrderCreate(body: any): OrderCreateInput {
  const customerId = Number(body.customerId);
  const restaurantId = Number(body.restaurantId);
  const itemCount = Number(body.itemCount);

  if (!Number.isInteger(customerId) || customerId <= 0) {
    throw new ResponseError(400, "customerId must be a positive integer");
  }
  if (!Number.isInteger(restaurantId) || restaurantId <= 0) {
    throw new ResponseError(400, "restaurantId must be a positive integer");
  }

  assertPositiveInt("itemCount", itemCount);

  return { customerId, restaurantId, itemCount };
}
