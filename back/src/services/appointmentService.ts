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
  const appointmentById: Appointment | null = await AppointmentModel.findOne({
    where: {
      id
    },
    relations: {
      user: true
    }
  });
  
  if (appointmentById) {
    return appointmentById;
  } else {
    throw Error ("No se encuentra un turno agendado con el ID especificado");
  }
};

// POST /appointment/schedule Crear un nuevo turno
export const createAppointmentService = async (appointmentData: IAppointmentDto): Promise<Appointment> => {
  if (appointmentData.userId !== undefined){
    const newAppointment = await AppointmentModel.create(appointmentData);
    newAppointment.status = StatusAppointment.ACTIVE;
    const user = await UserModel.findOneBy({
      id: appointmentData.userId,
    });
    
    if (user) {
      newAppointment.user = user;
      await AppointmentModel.save(newAppointment);
    } else {
      throw Error ("No se encuentra usuario con el ID especificado");
    }
    
    const service = await ServiceModel.findOneBy({
      id: appointmentData.serviceId,
    });
  
    if (service) {
      newAppointment.service = service;
      await AppointmentModel.save(newAppointment);
      return newAppointment;
    } else {
      throw Error ("No se encuentra un servicio un el ID especificado")
    }

  } else {
    throw Error ("No indicó el ID del usuario");
  }
  
};

// PUT /appointment/cancel Cancelar un turno
export const cancelAppointmentService = async (id: number): Promise<Appointment> => {
  const appointmentUpdate = await AppointmentModel.findOne({
    where: {
      id
    },
    relations: {
      user: true
    }
  });
  
  if (appointmentUpdate) {
    appointmentUpdate.status = StatusAppointment.CANCELLED;
    await AppointmentModel.save(appointmentUpdate);
    return appointmentUpdate;
  } else {
    throw Error ("No se encuentra turno agendado con el ID especificado")
  }
};
