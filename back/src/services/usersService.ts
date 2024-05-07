import { CredentialModel, UserModel } from "../config/data-source";
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
  const userById: User | null = await UserModel.findOne({
    where: {
      id
    },
    relations: {
      appointments: true,
      pets: true
    }
  })
  if (userById) {
    return userById;
  } else {
    throw Error ("No se encuentra un usuario registrado con ese ID");
  }
};

// POST /users/register Crear un nuevo usuario
export const registerUserService = async (userData: IUserDto, credentialData: ICredentialsDto): Promise<void> => {
  if (userData.name && userData.email && userData.birthdate && userData.nDni && credentialData.username && credentialData.password) {
    const newCredentialId = await createCredentialsService(credentialData);
    const newCredential = await CredentialModel.findOneBy({
      id: newCredentialId,
    })

    const newUser: User = await UserModel.create(userData);
    const results = await UserModel.save(newUser);
    if (newCredential) results.credential = newCredential;
    await UserModel.save(newUser);
  } else {
    throw Error ("Falta información")
  }
};

// POST /users/login Login del usuario a la aplicación
export const loginUserService = async (credentialData: ICredentialsDto) => {
  const validateCredential: number = await validateCredentialService(credentialData);
  const userAuth = await UserModel.findOneBy({
    id: validateCredential,
  });
  return {"login": true, "user": userAuth}
}
