import { Request, Response } from "express";
import {
  getAppointmentsService,
  getAppointmentsByIdService,
  createAppointmentService,
  cancelAppointmentService,
} from "../services/appointmentService";
import IAppointment from "../interfaces/IAppointment";
import IAppointmentDto from "../dto/AppointmetDto";

// GET /appointments Obtener todos los turnos
export const getApponintments = async (req: Request, res: Response) => {
  const allAppointments: IAppointment[] = await getAppointmentsService()
  res.status(200).json({message: "Obtener el listado de todos los turnos de todos los usuarios", allAppointments});
};

// GET /appointment/:id Obtener un turno por id
export const getApponintmentsById = async (req: Request, res: Response) => {
  const id: number = parseInt(req.params.id);
  const appointment: IAppointment = await getAppointmentsByIdService(id);
  res.status(200).json({message: "Obtener el detalle de un turno específico", appointment});
};

// POST /appointment/schedule Crear un nuevo turno
export const createApponintment = async (req: Request, res: Response) => {
  const appointment: IAppointmentDto = req.body;
  await createAppointmentService(appointment);
  res.status(201).json({message: "Agendar un nuevo turno"});
};

// PUT /appointment/cancel Cancelar un turno
export const cancelApponintment = async (req: Request, res: Response) => {
  const { id } = req.body;
  await cancelAppointmentService(id);
  res.status(200).json({message: "Cambiar el estatus de un turno a 'cancelled'"});
};
