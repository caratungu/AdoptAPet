import { UserModel } from "../config/data-source";
import ICredentialsDto from "../dto/CredentialsDto";
import IUserDto from "../dto/UserDto";
import { User } from "../entities/User";
import { createCredentialsService, validateCredentialService } from "./credentialsService";

//GET /users obtener todos los usuarios
export const getUsersService = async (): Promise<User[]> => {
  const users = await UserModel.find({
    relations: {
      credential: true,
      appointments: true,
      pets: true,
    }
  });
  return users;
};

// GET /users/:id Obtener un usuario por id
export const getUserByIdService = async (id: number): Promise<User | null> => {
  const userById: User | null = await UserModel.findOneBy({
    id,
  })
  if (userById) {
    return userById;
  } else {
    throw Error ();
  }
};

// POST /users/register Crear un nuevo usuario
export const registerUserService = async (userData: IUserDto, credentialData: ICredentialsDto): Promise<void> => {
  const newCredential = await createCredentialsService(credentialData);
  const newUser: User = await UserModel.create(userData);
  const results = await UserModel.save(newUser);
  results.credential = newCredential;
  await UserModel.save(newUser);
};

// POST /users/login Login del usuario a la aplicación
export const loginUserService = async (credentialData: ICredentialsDto) => {
  const validateCredential: number | string = await validateCredentialService(credentialData);
  if (typeof(validateCredential) === "string") {
    return "Error de autenticación";
  }
  if (typeof(validateCredential) === "number") {
    const userAuth = await UserModel.findOneBy({
      id: validateCredential,
    });
    return `Bienvenido ${userAuth?.name}`
  }
};
