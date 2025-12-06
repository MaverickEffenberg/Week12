import { ResponseError } from "../error/response-error";
import { OrderCreateInput } from "../validations/order-validation";
import { calculateEtaMinutes } from "../utils/order-util";
import { CustomerModel } from "../models/customer-model";
import { RestaurantModel } from "../models/restaurant-model";
import { OrderModel } from "../models/order-model";
import { prisma } from "../utils/database-util";


export const OrderService = {
  async create(input: OrderCreateInput) {
    const customer = await CustomerModel.findById(input.customerId);
    if (!customer) {
      throw new ResponseError(400, "Invalid customerId");
    }

    const restaurant = await RestaurantModel.findById(input.restaurantId);
    if (!restaurant) {
      throw new ResponseError(400, "Invalid restaurantId");
    }

    const etaMinutes = calculateEtaMinutes(input.itemCount);

    return OrderModel.create({
      ...input,
      etaMinutes,
    });
  },

  async getAll(filter: { customerId?: number; restaurantId?: number }) {
    return OrderModel.findAll(filter);
  },

  async getById(id: number) {
    const order = await OrderModel.findById(id);
    if (!order) {
      throw new ResponseError(404, "Order not found");
    }
    return order;
  },

  async delete(id: number) {
    const existing = await OrderModel.findById(id);
    if (!existing) {
      throw new ResponseError(404, "Order not found");
    }

    return prisma.order.delete({
      where: { id },
    });
  },
};
