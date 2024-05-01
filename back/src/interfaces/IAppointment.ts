import StatusAppointment from "../enums/StatusAppointment";

interface IAppointment {
  id: number; //! Revisar
  dateRequest: Date;
  hourRequest: Date;
  dateAppointment: Date;
  hourAppointment: Date;
  status: StatusAppointment;
  user: string; //! Revisar
  service: string; //! Revisar
}

export default IAppointment;
