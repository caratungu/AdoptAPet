import StatusPet from "../enums/StatusPet";
import TypePet from "../enums/TypePet";

interface IPetDto {
    type: TypePet,
    name: string,
    age: number,
    description: string,
    // status: StatusPet,
    userId: number,
}

export default IPetDto;