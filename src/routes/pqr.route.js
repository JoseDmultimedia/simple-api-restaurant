import { Router } from "express";
import {PqrController} from "../controllers/pqr.controller.js";

const router = Router();

router.get("/", PqrController.getAll);
router.get("/:id", PqrController.getById);
router.post("/", PqrController.create);
router.put("/:id", PqrController.update);
router.delete("/:id", PqrController.delete);

export default router;
