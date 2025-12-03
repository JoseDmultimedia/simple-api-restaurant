import { Router } from "express";
import {ReservationController} from "../controllers/reservation.controller.js";

const router = Router();

router.get("/", ReservationController.getAll);
router.get("/:id", ReservationController.getById);
router.post("/", ReservationController.create);
router.put("/:id", ReservationController.update);
router.delete("/:id", ReservationController.delete);

export default router;
