import { PetModel, UserModel } from "../config/data-source";
import ICredentialsDto from "../dto/CredentialsDto";
import IPetDto from "../dto/PetDto";
import IUserDto from "../dto/UserDto";
import { Pet } from "../entities/Pet";
import { User } from "../entities/User";
import StatusPet from "../enums/StatusPet";

//GET /pets obtener todas las mascotas
export const getPetsService = async (): Promise<Pet[]> => {
  const pets = await PetModel.find({
    relations: {
      user: true,
    },
  });
  return pets;
};

// GET /pets/:id Obtener una mascota por id
export const getPetByIdService = async (id: number): Promise<Pet | null> => {
  const petById: Pet | null = await PetModel.findOneBy({
    id,
  });
  if (petById) {
    return petById;
  } else {
    throw Error();
  }
};

// POST /pets/create Crear una nueva mascota
export const createPetService = async (petData: IPetDto): Promise<void> => {
  if (petData.age && petData.description && petData.name && petData.type) {
    const newPet: Pet = await PetModel.create(petData);
    newPet.status = StatusPet.ADAPTATION;
    await PetModel.save(newPet);
  } else {
    throw Error();
  }
};

// PUT /pets/update Actualiza información de la mascota
export const updatePetService = async (id: number, petData: IPetDto) => {
  const petToUpdate: Pet | null = await PetModel.findOneBy({
    id,
  });

  if (petToUpdate) {
    PetModel.merge(petToUpdate, petData);
    await PetModel.save(petToUpdate);
  } else {
    throw Error();
  }
};

// PUT /pets/status/:id Actualiza información del estado de la mascota
export const statusPetService = async (id: number, petStatus: IPetDto) => {
  const petToUpdate: Pet | null = await PetModel.findOneBy({
    id,
  });
  if (petToUpdate) {
    if (petStatus.userId && petStatus.userId !== 0) {
      const user: User | null = await UserModel.findOneBy({
        id: petStatus.userId,
      });
      if (user) {
        petToUpdate.user = user;
        petToUpdate.status = StatusPet.ADOPTED;
        await PetModel.save(petToUpdate);
      } else {
        console.log("El usuario con el id especificado no existe");
        throw Error("El usuario con el id especificado no existe");
      }
    } else {
      petToUpdate.user = null;
      PetModel.merge(petToUpdate, petStatus);
      await PetModel.save(petToUpdate);
    }
  } else {
    throw Error("No existe mascota con el id especificado");
  }
};
