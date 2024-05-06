import { AppointmentModel, ServiceModel, UserModel } from "../config/data-source";
import IAppointmentDto from "../dto/AppointmetDto";
import { Appointment } from "../entities/Appointment";
import StatusAppointment from "../enums/StatusAppointment";

// GET /appointments Obtener todos los turnos
export const getAppointmentsService = async (): Promise<Appointment[]> => {
  const appointments = await AppointmentModel.find({
    relations: {
      service: true,
      user: true,
    },
  });
  return appointments;
};

// GET /appointment/:id Obtener un turno por id
export const getAppointmentsByIdService = async (id: number): Promise<Appointment | null> => {
  const appointmentById: Appointment | null = await AppointmentModel.findOneBy({
    id,
  });
  
  if (appointmentById) {
    return appointmentById;
  } else {
    throw Error ();
  }
};

// POST /appointment/schedule Crear un nuevo turno
export const createAppointmentService = async (appointmentData: IAppointmentDto): Promise<void> => {
  if (appointmentData.userId !== undefined){
    const newAppointment = await AppointmentModel.create(appointmentData);
    newAppointment.status = StatusAppointment.ACTIVE;
    const user = await UserModel.findOneBy({
      id: appointmentData.userId,
    });
    console.log(user);
    
    if (user) {
      newAppointment.user = user;
      await AppointmentModel.save(newAppointment);
    } 
    
    const service = await ServiceModel.findOneBy({
      id: appointmentData.serviceId,
    });
  
    if (service) {
      newAppointment.service = service;
      await AppointmentModel.save(newAppointment);
    }
  } else {
    throw Error ();
  }
  
};

// PUT /appointment/cancel Cancelar un turno
export const cancelAppointmentService = async (id: number): Promise<void> => {
  const appointmentUpdate = await AppointmentModel.findOneBy({
    id,
  });
  
  if (appointmentUpdate) {
    appointmentUpdate.status = StatusAppointment.CANCELLED;
    await AppointmentModel.save(appointmentUpdate);
  } else {
    throw Error ()
  }
};
