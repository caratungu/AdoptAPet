import { Request, Response } from "express";
import {
  getPetsService,
  getPetByIdService,
  createPetService,
  updatePetService,
  statusPetService,
} from "../services/petsService";
import { Pet } from "../entities/Pet";
import IPetDto from "../dto/PetDto";

//GET /pets obtener todas las mascotas
export const getPets = async (req: Request, res: Response) => {
  try {
    const pets: Pet[] = await getPetsService();
    res.status(200).json({message: "Obtener el listado de todas las mascotas", pets})
  } catch {
    res.status(500).json({message: "Internal Server Error"})
  }
};

// GET /pets/:id Obtener una mascota por id
export const getPetById = async (req: Request, res: Response) => {
  try {
    const id: number = parseInt(req.params.id);
    const pet: Pet | null = await getPetByIdService(id);
    res.status(200).json({message: "Obtener el detalle de una mascota específica", pet})
  } catch {
    res.status(404).json({message: "No existe mascota registrada con ese id"})
  }
};

// POST /pets/create Crear una nueva mascota
export const createPet = async (req: Request, res: Response) => {
  try {
    const petData: IPetDto = req.body;
    await createPetService(petData);
    res.status(201).json({message: "Registro de una nueva mascota"})
  } catch (error: any) {
    res.status(400).json({message: "Faltan datos"})
  }
};

// PUT /pets/update Actualiza información de la mascota
export const updatePet = async (req: Request, res: Response) => {
  try {
    const petData: IPetDto = req.body;
    const id: number = parseInt(req.params.id)
    await updatePetService(id, petData);
    res.status(202).json({message: "Información de la mascota actualizada"});
  } catch {
    res.status(404).json({message: "No existe mascota registrada con ese id"});
  }
};

// PUT /pets/status/:id Actualiza información del estado de la mascota
export const statusPet = async (req: Request, res: Response) => {
  try {
    const petStatus: IPetDto = req.body;
    const id: number = parseInt(req.params.id)
    await statusPetService(id, petStatus);
    res.status(202).json({message: "Información de la mascota actualizada"});
  } catch (error:any) {
    res.status(400).json({message: "Revise la información ingresada", error});
  }
};
