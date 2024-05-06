import { Router } from "express";
import {
  changeStatusService,
  createService,
  getServiceById,
  getServices,
} from "../controllers/servicesController";

const serviceRouter: Router = Router();

// GET /services obtener todos los servicios
serviceRouter.get("/", getServices);

// GET /services/:id Obtener un servicio por id
serviceRouter.get("/:id", getServiceById);

// POST /services/create Crear un nuevo servicio
serviceRouter.post("/create", createService);

// PUT /services/isactive/:id Cambia el estado activo-inactivo del servicio
serviceRouter.put("/isactive/:id", changeStatusService);

export default serviceRouter;
