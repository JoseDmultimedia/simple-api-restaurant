import { Router } from "express";

import userRoutes from "./user.route.js";
import menuRoutes from "./menu.route.js";
import orderRoutes from "./order.route.js";
import orderProductsRoutes from "./orderProducts.route.js";
import reservationRoutes from "./reservation.route.js";
import pqrRoutes from "./pqr.route.js";

const router = Router();

router.use("/users", userRoutes);
router.use("/menus", menuRoutes);
router.use("/orders", orderRoutes);
router.use("/order-products", orderProductsRoutes);
router.use("/reservations", reservationRoutes);
router.use("/pqrs", pqrRoutes);

export default router;
