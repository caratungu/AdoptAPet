import IAppointment from "../interfaces/IAppointment";

let allAppointments: IAppointment[];
// GET /appointments Obtener todos los turnos
export const getAppointmentsService = () => {
  //? Líneas de código
};

// GET /appointment/:id Obtener un turno por id
export const getAppointmentsByIdService = () => {
  //? Líneas de código
};

// POST /appointment/schedule Crear un nuevo turno
export const createAppointmentService = () => {
  //? Líneas de código
  // const date = new Date();
  // console.log(date);
  // const fechaLocal = new Date(date.getTime() - date.getTimezoneOffset() * 60000);
  // console.log(fechaLocal);
  // console.log(fechaLocal.getUTCHours());
  // console.log(fechaLocal.getUTCMinutes());
  // console.log(fechaLocal.getUTCSeconds());
  // const fechaReq = new Date(2024, 5 - 1, 2, 10 - 5, 30, 0); // Verificar si es un estandar que deba restar 5 al valor de la hora
  // console.log(fechaReq);
};

// PUT /appointment/cancel Cancelar un turno
export const cancelAppointmentService = () => {
  //? Líneas de código
};
