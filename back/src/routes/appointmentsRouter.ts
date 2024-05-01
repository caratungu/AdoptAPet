import { Router } from "express";
import {
  cancelApponintment,
  createApponintment,
  getApponintments,
  getApponintmentsById,
} from "../controllers/appointmentsController";

const appointmentsRouter: Router = Router();

// GET /appointments Obtener todos los turnos
appointmentsRouter.get("/", getApponintments);

// GET /appointment/:id Obtener un turno por id
appointmentsRouter.get("/:id", getApponintmentsById);

// POST /appointment/schedule Crear un nuevo turno
appointmentsRouter.post("/schedule", createApponintment);

// PUT /appointment/cancel Cancelar un turno
appointmentsRouter.put("/cancel", cancelApponintment);

export default appointmentsRouter;
