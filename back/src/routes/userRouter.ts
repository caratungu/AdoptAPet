import { Router } from "express";
import {
  getUsers,
  getUserById,
  registertUser,
  loginUser,
} from "../controllers/usersController";

const usersRouter: Router = Router();

// GET /users obtener todos los usuarios
usersRouter.get("/", getUsers);

// GET /users/:id Obtener un usuario por id
usersRouter.get("/:id", getUserById);

// POST /users/register Crear un nuevo usuario
usersRouter.post("/register", registertUser);

// POST /users/login Login del usuario a la aplicación
usersRouter.post("/login", loginUser);

export default usersRouter;
