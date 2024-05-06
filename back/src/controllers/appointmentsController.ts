import { Request, Response } from "express";
import {
  getAppointmentsService,
  getAppointmentsByIdService,
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
      .json({
        message: "Obtener el listado de todos los turnos de todos los usuarios",
        allAppointments,
      });
  } catch {
    res.status(500).json({ message: "Internal Server Error" });
  }
};

// GET /appointment/:id Obtener un turno por id
export const getApponintmentsById = async (req: Request, res: Response) => {
  try {
    const id: number = parseInt(req.params.id);
    const appointment: Appointment | null = await getAppointmentsByIdService(
      id
    );
    res
      .status(200)
      .json({
        message: "Obtener el detalle de un turno específico",
        appointment,
      });
  } catch {
    res.status(404).json({ message: "No existe turno con ese id" });
  }
};

// POST /appointment/schedule Crear un nuevo turno
export const createApponintment = async (req: Request, res: Response) => {
  try {
    const appointment: IAppointmentDto = req.body;
    await createAppointmentService(appointment);
    res.status(201).json({ message: "Agendar un nuevo turno" });
  } catch {
    res.status(400).json({ message: "Falta información de usuario" });
  }
};

// PUT /appointment/cancel Cancelar un turno
export const cancelApponintment = async (req: Request, res: Response) => {
  try {
    const { id } = req.body;
    await cancelAppointmentService(id);
    res
      .status(200).json({ message: "Cambiar el estatus de un turno a 'cancelled'" });
  } catch {
    res.status(404).json({ message: "No existe turno con ese id" });
  }
};
