import { Request, Response } from "express";
import {
  getUsersService,
  getUserByIdService,
  registerUserService,
  loginUserService
} from "../services/usersService";
import IUser from "../interfaces/IUser";

//GET /users obtener todos los usuarios
export const getUsers = async (req: Request, res: Response) => {
  const users: IUser[] = await getUsersService();
  res.status(200).json({message: "Obtener el listado de todos los usuarios", users})
};

// GET /users/:id Obtener un usuario por id
export const getUserById = async (req: Request, res: Response) => {
  const id: number = parseInt(req.params.id);
  const user: IUser = await getUserByIdService(id)
  res.status(200).json({message: "Obtener el detalle de un usuario específico", user})
};

// POST /users/register Crear un nuevo usuario
export const registertUser = async (req: Request, res: Response) => {
  const { name, email, phone, birthdate, nDni, picture, username, password } = req.body;
  await registerUserService({ name, email, phone, birthdate, nDni, picture }, { username, password });
  res.status(201).json({message: "Registro de un nuevo usuario"})
};

// POST /users/login Login del usuario a la aplicación
export const loginUser = async (req: Request, res: Response) => {
  res.status(202).json({message: "Login del usuario a la aplicación"})
};