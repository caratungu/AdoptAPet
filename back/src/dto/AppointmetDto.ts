interface IAppointmentDto {
  dateRequest: Date;
  timeRequest: string;
  dateAppointment: Date;
  timeAppointment: string;
  userId: number; //! Revisar
  serviceId: number; //! Revisar
}

export default IAppointmentDto;
