import { Request, Response } from "express";
import { OrderService } from "../services/order-service";
import { validateOrderCreate } from "../validations/order-validation";

export const OrderController = {
  async create(req: Request, res: Response) {
    const input = validateOrderCreate(req.body);
    const order = await OrderService.create(input);
    return res.status(201).json(order);
  },

  async getAll(req: Request, res: Response) {
    const customerId = req.query.customerId
      ? Number(req.query.customerId)
      : undefined;

    const restaurantId = req.query.restaurantId
      ? Number(req.query.restaurantId)
      : undefined;

    const orders = await OrderService.getAll({ customerId, restaurantId });
    return res.json(orders);
  },

  async getById(req: Request, res: Response) {
    const id = Number(req.params.id);
    const order = await OrderService.getById(id);
    return res.json(order);
  },

  async delete(req: Request, res: Response) {
    const id = Number(req.params.id);

    const deleted = await OrderService.delete(id);

    return res.json({
      message: "Order deleted",
      data: deleted,
    });
  }
};
