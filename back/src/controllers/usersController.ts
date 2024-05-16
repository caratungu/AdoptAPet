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
    res.status(200).json({message: "Usuario encontrado", user})
  } catch (error: any) {
    res.status(404).json(error.message)
  }
};

// POST /users/register Crear un nuevo usuario
export const registertUser = async (req: Request, res: Response) => {
  try {
    const { name, email, phone, birthdate, nDni, photo, username, password } = req.body;
    await registerUserService({ name, email, phone, birthdate, nDni, photo }, { username, password });
    res.status(201).json({message: "Registro de nuevo usuario exitoso"})
  } catch (error: any) {
    res.status(400).json({message: `${error.detail || error.message}`});
  }
};

// POST /users/login Login del usuario a la aplicación
export const loginUser = async (req: Request, res: Response) => {
  try {
    const credentialData: ICredentialsDto = req.body;
    const results = await loginUserService(credentialData);
    res.status(200).json({message: `Usted se ha logueado correctamente ${results.user?.name}`, user: results.user})
  } catch (error: any) {
    res.status(400).json(error.message)
  }
};