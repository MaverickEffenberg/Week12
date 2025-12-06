import { prisma } from "../utils/database-util";
import { OrderCreateInput } from "../validations/order-validation";

export const OrderModel = {
  create(data: OrderCreateInput & { etaMinutes: number }) {
    return prisma.order.create({ data });
  },

  findAll(filter?: { customerId?: number; restaurantId?: number }) {
    return prisma.order.findMany({
      where: filter,
      include: {
        customer: true,
        restaurant: true,
      },
    });
  },

  findById(id: number) {
    return prisma.order.findUnique({
      where: { id },
      include: {
        customer: true,
        restaurant: true,
      },
    });
  },
};
