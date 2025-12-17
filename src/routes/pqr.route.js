import { Router } from "express";
import {PqrController} from "../controllers/pqr.controller.js";

const router = Router();

router.get("/plain/text-pqrs", PqrController.getAllText);
router.get("/plain/text-pqr/:id", PqrController.getByIdText);

router.get("/", PqrController.getAll);
router.get("/:id", PqrController.getById);
router.post("/", PqrController.create);
router.put("/:id", PqrController.update);
router.delete("/:id", PqrController.delete);

router.post("/plain/create-with-text", PqrController.createWithText);

export default router;
