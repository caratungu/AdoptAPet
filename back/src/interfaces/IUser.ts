import IAppointment from "./IAppointment";

interface IUser {
  id: number; //! Revisar
  firstName: string;
  lastName: string;
  nickname: string; //! Se debe validar que sea único
  email: string;
  phone: number;
  picture: string; //! Revisar
  appointments: IAppointment[];
  credential: string; //! Revisar
}
