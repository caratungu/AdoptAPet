import { Request, Response } from "express";
import {
  getUsersService,
  getUserByIdService,
  registerUserService,
  loginUserService
} from "../services/usersService";

//GET /users obtener todos los usuarios
export const getUsers = (req: Request, res: Response) => {
  res.status(200).json({message: "Obtener el listado de todos los usuarios"})
};

// GET /users/:id Obtener un usuario por id
export const getUserById = (req: Request, res: Response) => {
  res.status(200).json({message: "Obtener el detalle de un usuario específico"})
};

// POST /users/register Crear un nuevo usuario
export const registertUser = (req: Request, res: Response) => {
  res.status(201).json({message: "Registro de un nuevo usuario"})
};

// POST /users/login Login del usuario a la aplicación
export const loginUser = (req: Request, res: Response) => {
  res.status(202).json({message: "Login del usuario a la aplicación"})
};