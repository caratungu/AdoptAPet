import { Request, Response } from "express";
import {
  getAppointmentsService,
  getAppointmentsByIdService,
  getAppointmentsByUserService,
  createAppointmentService,
  cancelAppointmentService,
} from "../services/appointmentService";
import IAppointmentDto from "../dto/AppointmetDto";
import { Appointment } from "../entities/Appointment";

// GET /appointments Obtener todos los turnos
export const getApponintments = async (req: Request, res: Response) => {
  try {
    const allAppointments: Appointment[] = await getAppointmentsService();
    res
      .status(200)
      .json(allAppointments);
  } catch {
    res.status(404).json({ message: "Internal Server Error" });
  }
};

// GET /appointment/:id Obtener un turno por id
export const getAppointmentsById = async (req: Request, res: Response) => {
  try {
    const id: number = parseInt(req.params.id);
    const appointment: Appointment | null = await getAppointmentsByIdService(
      id
    );
    res.status(200).json({message: "Detalle del turno solicitado", appointment});
  } catch (error: any) {
    res.status(404).json(error.message);
  }
};

// GET /appointment/byUser/:id Obtener un turno por id de usuario
export const getAppointmentsByUser = async (req: Request, res: Response) => {
  try {
    const id: number = parseInt(req.params.id);
    const appointments: Appointment [] | null = await getAppointmentsByUserService(
      id
    );
    res.status(200).json({message: "Detalle de turnos solicitado", appointments});
  } catch (error: any) {
    res.status(404).json(error.message);
  }
};

// POST /appointment/schedule Crear un nuevo turno
export const createApponintment = async (req: Request, res: Response) => {
  try {    
    const appointment: IAppointmentDto = req.body;
    const results = await createAppointmentService(appointment);
    res.status(201).json({ message: "Se ha agendado un nuevo turno", turno: results});
  } catch (error: any) {
    res.status(400).json(error.message);
  }
};

// PUT /appointment/cancel Cancelar un turno
export const cancelApponintment = async (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params.id);
    const results = await cancelAppointmentService(id);
    res.status(200).json({ message: "Turno cancelado", turn: results });
  } catch (error: any) {
    res.status(404).json(error.message);
  }
};
