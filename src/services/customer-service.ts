import { ResponseError } from "../error/response-error";
import { CustomerModel } from "../models/customer-model";
import {
  CustomerCreateInput,
  CustomerUpdateInput,
} from "../validations/customer-validation";

export const CustomerService = {
  async create(input: CustomerCreateInput) {
    return CustomerModel.create(input);
  },

  async getAll() {
    return CustomerModel.findAll();
  },

  async getById(id: number) {
    const customer = await CustomerModel.findById(id);
    if (!customer) {
      throw new ResponseError(404, "Customer not found");
    }
    return customer;
  },

  async update(id: number, input: CustomerUpdateInput) {
    await CustomerService.getById(id);
    return CustomerModel.update(id, input);
  },

  async delete(id: number) {
    await CustomerService.getById(id);
    await CustomerModel.delete(id);
  },
};
