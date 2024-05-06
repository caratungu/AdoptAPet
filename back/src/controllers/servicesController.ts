import { Request, Response } from "express";
import {
  changeStatusServiceService,
  createServiceService,
  getServiceByIdService,
  getServicesService,
} from "../services/servicesService";
import { Service } from "../entities/Service";

// GET /services obtener todos los servicios
export const getServices = async (req: Request, res: Response) => {
  try {
    const allServices: Service[] = await getServicesService();
    res.status(200).json(allServices);
  } catch {
    res.status(500).json({message: "Internal Server Error"})
  }
};

// GET /services/:id Obtener un servicio por id
export const getServiceById = async (req: Request, res: Response) => {
  try {
    const serviceById: Service | null = await getServiceByIdService(
      parseInt(req.params.id)
    );
    res.status(200).json(serviceById);
  } catch {
    res.status(404).json({message: "No existe servicio registrado con ese id"})
  }
};

// POST /services/create Crear un nuevo servicio
export const createService = async (req: Request, res: Response) => {
  try {
    const serviceData = req.body;
    await createServiceService(serviceData);
    res.status(201).json({ message: "Servicio creado exitosamente" });
  } catch {
    res.status(400).json({message: "Información incompleta"})
  }
};

// PUT /services/isactive/:id Cambia el estado activo-inactivo del servicio
export const changeStatusService = async (req: Request, res: Response) => {
  try {
    const id: number = parseInt(req.params.id);
    const serviceData = req.body;
    await changeStatusServiceService(id, serviceData);
    res.status(200).json({ message: "Se actualizó es estado del servicio" });
  } catch {
    res.status(404).json({message: "No existe servicio registrado con ese id"})
  }
};
