import { Router } from "express";
import {MenuController} from "../controllers/menu.controller.js";

const router = Router();

router.get("/", MenuController.getAll);
router.get("/:id", MenuController.getById);
router.post("/", MenuController.create);
router.put("/:id", MenuController.update);
router.delete("/:id", MenuController.delete);

router.get("/plain/text-menu", MenuController.getMenuText);

export default router;
