import TypePet from "../enums/TypePet";
import StatusPet from "../enums/StatusPet"

interface IPet {
  type: TypePet;
  name: string;
  age: number;
  description: string;
  status: StatusPet;
  user: string; //! Revisar
}