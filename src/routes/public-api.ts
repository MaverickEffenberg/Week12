import { Router } from "express";
import { asyncHandler } from "../utils/async-handler";
import { CustomerController } from "../controllers/customer-controller";
import { RestaurantController } from "../controllers/restaurant-controller";
import { OrderController } from "../controllers/order-controller";

const router = Router();

router.post("/customers", asyncHandler(CustomerController.create));
router.get("/customers", asyncHandler(CustomerController.getAll));
router.get("/customers/:id", asyncHandler(CustomerController.getById));
router.put("/customers/:id", asyncHandler(CustomerController.update));
router.delete("/customers/:id", asyncHandler(CustomerController.delete));

router.post("/restaurants", asyncHandler(RestaurantController.create));
router.get("/restaurants", asyncHandler(RestaurantController.getAll));
router.get("/restaurants/:id", asyncHandler(RestaurantController.getById));
router.put("/restaurants/:id", asyncHandler(RestaurantController.update));
router.delete("/restaurants/:id", asyncHandler(RestaurantController.delete));

router.post("/orders", asyncHandler(OrderController.create));
router.get("/orders", asyncHandler(OrderController.getAll));
router.get("/orders/:id", asyncHandler(OrderController.getById));
router.delete("/orders/:id", asyncHandler(OrderController.delete));

export default router;
