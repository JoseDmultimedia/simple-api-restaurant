import { Router } from "express";
import {OrderController} from "../controllers/order.controller.js";

const router = Router();

router.get("/plain/text-order/:id", OrderController.getByIdText);
router.get("/plain/text-orders", OrderController.getAllText);

router.get("/", OrderController.getAll);
router.get("/:id", OrderController.getById);
router.post("/", OrderController.create);
router.put("/:id", OrderController.update);
router.delete("/:id", OrderController.delete);
router.post("/with-products", OrderController.createWithProducts);

router.post("/plain/with-products-text", OrderController.createWithProductsText);


export default router;
