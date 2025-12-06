import { prisma } from "../utils/database-util";
import { CustomerCreateInput, CustomerUpdateInput } from "../validations/customer-validation";

export const CustomerModel = {
  create(data: CustomerCreateInput) {
    return prisma.customer.create({ data });
  },

  findAll() {
    return prisma.customer.findMany();
  },

  findById(id: number) {
    return prisma.customer.findUnique({ where: { id } });
  },

  update(id: number, data: CustomerUpdateInput) {
    return prisma.customer.update({ where: { id }, data });
  },

  delete(id: number) {
    return prisma.customer.delete({ where: { id } });
  },
};
