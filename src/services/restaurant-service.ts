import { ResponseError } from "../error/response-error";
import { RestaurantModel } from "../models/restaurant-model";
import {
  RestaurantCreateInput,
  RestaurantUpdateInput,
} from "../validations/restaurant-validation";

export const RestaurantService = {
  async create(input: RestaurantCreateInput) {
    return RestaurantModel.create(input);
  },

  async getAll(status?: string) {
    let filter: { isOpen?: boolean } = {};

    if (status === "open") {
      filter.isOpen = true;
    } else if (status === "closed") {
      filter.isOpen = false;
    }

    return RestaurantModel.findAll(
      Object.keys(filter).length > 0 ? filter : undefined
    );
  },

  async getById(id: number) {
    const restaurant = await RestaurantModel.findById(id);
    if (!restaurant) {
      throw new ResponseError(404, "Restaurant not found");
    }
    return restaurant;
  },

  async update(id: number, input: RestaurantUpdateInput) {
    await this.getById(id);
    return RestaurantModel.update(id, input);
  },

  async delete(id: number) {
    await this.getById(id);
    return RestaurantModel.delete(id);
  },
};
