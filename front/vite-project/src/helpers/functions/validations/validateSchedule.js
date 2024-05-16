export const validateSchedule = (inputs) => {  
  const errors = {};
  
  if (inputs.dateAppointment && inputs.timeAppointment && inputs.serviceId) {
      const today = new Date();
      today.setHours(0, 0, 0, 0);
    
      const regexDate =
        /^(?:\d{4}-(?:(?:0[1-9]|1[0-2])-(?:0[1-9]|1\d|2[0-8])|(?:0[13-9]|1[0-2])-(?:29|30)|(?:0[13578]|1[02])-31)|(?:\d{2}(?:[13579][26]|[02468][048]|0[0-9]|1[0-6])|(?:[02468][048]|[13579][26])00)-02-29)(?:\s(?:[01]\d|2[0-3]):[0-5]\d:[0-5]\d)?$/;
    
      if (!(regexDate.test(inputs.dateAppointment) && Date.parse(inputs.dateAppointment) > today)) {
        errors.dateAppointment = "Fecha no válida"
      }
    
      const regexTime = /^(0[8-9]|1[0-6]):[0-5][0-9]$/;
      if (!(regexTime.test(inputs.timeAppointment))) {
        errors.timeAppointment = "Hora no válida"
      }
    
      if (inputs.serviceId === "") {
        errors.serviceId = "Seleccione una opción"
      }
  }

  return errors;
};

export const validateScheduleAllFields = (inputs, errors) => {
  const err = Object.keys(errors).length;
  return (
    !inputs.dateAppointment ||
    !inputs.timeAppointment ||
    !inputs.serviceId ||
    err !== 0
  );
};
