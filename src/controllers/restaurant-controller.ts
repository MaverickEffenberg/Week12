import { Request, Response } from "express";
import { RestaurantService } from "../services/restaurant-service";
import {
  validateRestaurantCreate,
  validateRestaurantUpdate,
} from "../validations/restaurant-validation";

export const RestaurantController = {
  create: async (req: Request, res: Response) => {
    const input = validateRestaurantCreate(req.body);
    const restaurant = await RestaurantService.create(input);
    res.status(201).json(restaurant);
  },

  getAll: async (req: Request, res: Response) => {
    const status = req.query.status as string | undefined;
    const restaurants = await RestaurantService.getAll(status);
    res.json(restaurants);
  },

  getById: async (req: Request, res: Response) => {
    const id = Number(req.params.id);
    const restaurant = await RestaurantService.getById(id);
    res.json(restaurant);
  },

  update: async (req: Request, res: Response) => {
    const id = Number(req.params.id);
    const input = validateRestaurantUpdate(req.body);
    const updated = await RestaurantService.update(id, input);
    res.json(updated);
  },

  delete: async (req: Request, res: Response) => {
    const id = Number(req.params.id);
    await RestaurantService.delete(id);
    res.json({ message: "Restaurant deleted" });
  },
};
