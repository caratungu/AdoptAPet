import StatusAppointment from "../enums/StatusAppointment";

interface IAppointment {
  id: number;
  dateRequest: Date;
  timeRequest: string;
  dateAppointment: Date;
  timeAppointment: string;
  status: StatusAppointment;
  userId: number; //! Revisar
  serviceId: number; //! Revisar
}

export default IAppointment;
