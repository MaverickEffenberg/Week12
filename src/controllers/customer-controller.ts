import { Request, Response } from "express";
import { CustomerService } from "../services/customer-service";
import {
  validateCustomerCreate,
  validateCustomerUpdate,
} from "../validations/customer-validation";

export const CustomerController = {
  create: async (req: Request, res: Response) => {
    const input = validateCustomerCreate(req.body);
    const customer = await CustomerService.create(input);
    res.status(201).json(customer);
  },

  getAll: async (_req: Request, res: Response) => {
    const customers = await CustomerService.getAll();
    res.json(customers);
  },

  getById: async (req: Request, res: Response) => {
    const id = Number(req.params.id);
    const customer = await CustomerService.getById(id);
    res.json(customer);
  },

  update: async (req: Request, res: Response) => {
    const id = Number(req.params.id);
    const input = validateCustomerUpdate(req.body);
    const updated = await CustomerService.update(id, input);
    res.json(updated);
  },

  delete: async (req: Request, res: Response) => {
    const id = Number(req.params.id);
    await CustomerService.delete(id);
    res.json({ message: "Customer deleted" });
  },
};
