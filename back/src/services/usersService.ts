import ICredentialsDto from "../dto/CredentialsDto";
import IUserDto from "../dto/UserDto";
import IUser from "../interfaces/IUser";
import { createCredentialsService } from "./credentialsService";

let users: IUser[] = [
  {
    id: 1,
    name: "Carlos Tunjano",
    email: "ctunjano@mail.com",
    phone: 123456789,
    birthdate: new Date(1987, 2, 25),
    nDni: 123,
    picture: "FotoCT", //! Revisar
    credentialsId: 1,
  },
  {
    id: 2,
    name: "Erika Cortes",
    email: "ecortes@mail.com",
    phone: 234567891,
    birthdate: new Date(1984, 3, 16),
    nDni: 456,
    picture: "FotoEC", //! Revisar
    credentialsId: 2,
  },
  {
    id: 3,
    name: "Marina Gutiérrez",
    email: "mgutierrez@mail.com",
    phone: 345678912,
    birthdate: new Date(1957, 8, 10),
    nDni: 789,
    picture: "FotoMG", //! Revisar
    credentialsId: 3,
  },
];
let newUserId = 4;

//GET /users obtener todos los usuarios
export const getUsersService = async (): Promise<IUser[]> => {
  return users;
};

// GET /users/:id Obtener un usuario por id
export const getUserByIdService = async (id: number): Promise<IUser> => {
  let userById: IUser[] = users.filter((user: IUser) => {
    if (user.id === id) {
      return user;
    }
  });
  return userById[0];
};

// POST /users/register Crear un nuevo usuario
export const registerUserService = async (userData: IUserDto, credentialData: ICredentialsDto): Promise<void> => {
  users.push({
    id: newUserId,
    name: userData.name,
    email: userData.email,
    phone: userData.phone,
    birthdate: userData.birthdate,
    nDni: userData.nDni,
    picture: userData.picture, //! Revisar
    credentialsId: await createCredentialsService(credentialData),
  });
  newUserId++;
};

// POST /users/login Login del usuario a la aplicación
export const loginUserService = async () => {
  //? Líneas de código
};
