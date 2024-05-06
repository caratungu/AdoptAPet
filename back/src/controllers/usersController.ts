import { Request, Response } from "express";
import {
  getUsersService,
  getUserByIdService,
  registerUserService,
  loginUserService
} from "../services/usersService";
import { User } from "../entities/User";
import ICredentialsDto from "../dto/CredentialsDto";

//GET /users obtener todos los usuarios
export const getUsers = async (req: Request, res: Response) => {
  try {
    const users: User[] = await getUsersService();
    res.status(200).json({message: "Obtener el listado de todos los usuarios", users})
  } catch {
    res.status(500).json({message: "Internal Server Error"})
  }
};

// GET /users/:id Obtener un usuario por id
export const getUserById = async (req: Request, res: Response) => {
  try {
    const id: number = parseInt(req.params.id);
    const user: User | null = await getUserByIdService(id)
    res.status(200).json({message: "Obtener el detalle de un usuario específico", user})
  } catch {
    res.status(404).json({message: "No existe usuario registrado con ese id"})
  }
};

// POST /users/register Crear un nuevo usuario
export const registertUser = async (req: Request, res: Response) => {
  try {
    const { name, email, phone, birthdate, nDni, picture, username, password } = req.body;
    await registerUserService({ name, email, phone, birthdate, nDni, picture }, { username, password });
    res.status(201).json({message: "Registro de un nuevo usuario"})
  } catch (error: any) {
    res.status(409).json(error.detail);
  }
};

// POST /users/login Login del usuario a la aplicación
export const loginUser = async (req: Request, res: Response) => {
  try {
    const credentialData: ICredentialsDto = req.body;
    const results = await loginUserService(credentialData);
    res.status(202).json({message: results})
  } catch (error) {
    res.status(500).json({message: "Internal Server Error"})
  }
};