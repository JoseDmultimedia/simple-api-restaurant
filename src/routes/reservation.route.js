import { Router } from "express";
import {ReservationController} from "../controllers/reservation.controller.js";

const router = Router();

router.get("/plain/reservations-text", ReservationController.getAllText);
router.get("/plain/reservation-text/:id", ReservationController.getByIdText);

router.get("/", ReservationController.getAll);
router.get("/:id", ReservationController.getById);
router.post("/", ReservationController.create);
router.put("/:id", ReservationController.update);
router.delete("/:id", ReservationController.delete);

router.post("/plain/create-with-text", ReservationController.createWithText);

export default router;
