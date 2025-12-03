import { Router } from "express";
import {OrderProductsController} from "../controllers/orderProducts.controller.js";

const router = Router();

router.get("/", OrderProductsController.getAll);
router.get("/:id", OrderProductsController.getById);
router.post("/", OrderProductsController.create);
router.put("/:id", OrderProductsController.update);
router.delete("/:id", OrderProductsController.delete);

export default router;
