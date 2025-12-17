import { Router } from "express";
import {UserController} from "../controllers/user.controller.js";

const router = Router();

router.get("/email/:email", UserController.getByEmail);
router.get("/plain/email-text/:email", UserController.getByEmailText);

router.get("/", UserController.getAll);
router.get("/:id", UserController.getById);
router.post("/", UserController.create);
router.put("/:id", UserController.update);
router.delete("/:id", UserController.delete);

router.post("/plain/create-with-text", UserController.createWithText);

export default router;
