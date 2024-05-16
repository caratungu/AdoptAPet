import { NextFunction, Request, Response, Router } from "express";
import {
  cancelApponintment,
  createApponintment,
  getApponintments,
  getAppointmentsById,
  getAppointmentsByUser
} from "../controllers/appointmentsController";
import { checkAppointmentSchedule } from "../middlewares";

const appointmentsRouter: Router = Router();

// GET /appointments Obtener todos los turnos
appointmentsRouter.get("/", getApponintments);

// GET /appointment/:id Obtener un turno por id
appointmentsRouter.get("/:id", getAppointmentsById);

// GET /appointment/byUser/:id Obtener un turno por id de usuario
appointmentsRouter.get("/byuser/:id", getAppointmentsByUser);

// POST /appointment/schedule Crear un nuevo turno
appointmentsRouter.post("/schedule", checkAppointmentSchedule, createApponintment);

// PUT /appointment/cancel Cancelar un turno
appointmentsRouter.put("/cancel/:id", cancelApponintment);

export default appointmentsRouter;
