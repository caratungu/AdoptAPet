import { Router } from "express";
import {
  getPets,
  getPetById,
  createPet,
  updatePet,
  statusPet,
} from "../controllers/petsController";

const petsRouter: Router = Router();

// GET /pets obtener todas las mascotas
petsRouter.get("/", getPets);

// GET /pets/:id Obtener una mascota por id
petsRouter.get("/:id", getPetById);

// POST /pets/create Crear una nueva mascota
petsRouter.post("/create", createPet);

// PUT /pets/update Actualiza información de la mascota
petsRouter.put("/update/:id", updatePet);

// PUT /pets/status/:id Actualiza información del estado de la mascota
petsRouter.put("/status/:id", statusPet);

export default petsRouter;
