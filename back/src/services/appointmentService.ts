import IAppointmentDto from "../dto/AppointmetDto";
import StatusAppointment from "../enums/StatusAppointment";
import IAppointment from "../interfaces/IAppointment";

let allAppointments: IAppointment[] = [
  {
    id: 1,
    dateRequest: new Date (2024, 3, 29),
    timeRequest: "9:35",
    dateAppointment: new Date (2024, 4, 3),
    timeAppointment: "14:30",
    status: StatusAppointment.CANCELLED,
    userId: 1,
    serviceId: 1,
  },
  {
    id: 2,
    dateRequest: new Date (2024, 3, 30),
    timeRequest: "7:00",
    dateAppointment: new Date (2024, 4, 2),
    timeAppointment: "10:00",
    status: StatusAppointment.ACTIVE,
    userId: 2,
    serviceId: 1,
  },
  {
    id: 3,
    dateRequest: new Date (2024, 3, 30),
    timeRequest: "9:11",
    dateAppointment: new Date (2024, 4, 2),
    timeAppointment: "16:00",
    status: StatusAppointment.ACTIVE,
    userId: 1,
    serviceId: 1,
  },
];
let newAppointmentId = 3;

// GET /appointments Obtener todos los turnos
export const getAppointmentsService = async (): Promise<IAppointment[]> => {
  return allAppointments;
};

// GET /appointment/:id Obtener un turno por id
export const getAppointmentsByIdService = async (id: number): Promise<IAppointment> => {
  let appointmentById: IAppointment[] = allAppointments.filter((appointment:IAppointment) => {
    if (appointment.id === id) {
      return appointment;
    }
  })
  return appointmentById[0];
};

// POST /appointment/schedule Crear un nuevo turno
export const createAppointmentService = async (appointmentData: IAppointmentDto): Promise<void> => {
  newAppointmentId++;
  allAppointments.push({
    id: newAppointmentId,
    dateRequest: appointmentData.dateRequest,
    timeRequest: appointmentData.timeRequest,
    dateAppointment: appointmentData.dateAppointment,
    timeAppointment: appointmentData.timeAppointment,
    status: StatusAppointment.ACTIVE,
    userId: appointmentData.userId,
    serviceId: appointmentData.serviceId,
  })
};

// PUT /appointment/cancel Cancelar un turno
export const cancelAppointmentService = async (id: number): Promise<void> => {
  allAppointments.map((appointment: IAppointment) => {
    if (appointment.id === id) {
      appointment.status = StatusAppointment.CANCELLED;
    }
  })
};
