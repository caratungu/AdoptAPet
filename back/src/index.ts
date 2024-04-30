interface IUser {
  name: string;
  apellidos: string;
  nickname: string;
  email: string;
}

enum StatusT {
  Active = "Activo",
  Cancel = "Cancelado",
  Served = "Atendido",
}

interface ITurno {
  dateS: Date;
  dateR: Date;
  hourR: Date;
  status: StatusT;
}

interface ICredentials {
  username: string;
  password: string;
}

interface IService {
  name: string;
  description: string;
}

enum Type {
  Dog = "Perro",
  Cat = "Gato",
  Other = "Otro",
}

enum StatusP {
  Adoption = "En adopción",
  Adopted = "Adoptado",
}

interface IPet {
  type: Type;
  name: string;
  age: number;
  description: string;
  status: StatusP;
}

// const date = new Date();
// console.log(date);
// console.log(date.getTime());

const date = new Date();
console.log(date);
const fechaLocal = new Date(date.getTime() - date.getTimezoneOffset() * 60000);
console.log(fechaLocal);
console.log(fechaLocal.getUTCHours());
console.log(fechaLocal.getUTCMinutes());
console.log(fechaLocal.getUTCSeconds());

const fechaReq = new Date(2024, 5 - 1, 2, 10 - 5, 30, 0); // Verificar si es un estandar que deba restar 5 al valor de la hora
console.log(fechaReq);

const pet1: IPet = {
  type: Type.Cat,
  name: "Akira",
  age: 11,
  description: "Felino muy esquivo, color ceniza",
  status: StatusP.Adopted,
};

const user1: IUser = {
  name: "Carlos",
  apellidos: "Tunjano",
  nickname: "caratungu",
  email: "ctunjano@mail.com",
};

const turno1: ITurno = {
  dateS: new Date(2024, 3, 29),
  dateR: new Date(2024, 4, 2, 5, 0, 0),
  hourR: new Date(2024, 4, 2, 5, 0, 0),
  status: StatusT.Active,
};
