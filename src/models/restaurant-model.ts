import { prisma } from "../utils/database-util";
import {
  RestaurantCreateInput,
  RestaurantUpdateInput,
} from "../validations/restaurant-validation";

export const RestaurantModel = {
  create(data: RestaurantCreateInput) {
    return prisma.restaurant.create({ data });
  },

  findAll(filter?: { isOpen?: boolean }) {
    return prisma.restaurant.findMany({
      where: filter,
    });
  },

  findById(id: number) {
    return prisma.restaurant.findUnique({ where: { id } });
  },

  update(id: number, data: RestaurantUpdateInput) {
    return prisma.restaurant.update({ where: { id }, data });
  },

  delete(id: number) {
    return prisma.restaurant.delete({ where: { id } });
  },
};
