import { useState } from "react";
import { Appointments } from "../../components/primary";
import { appointments as apps } from "../../helpers/myTurns";

const MisTurnos = () => {
  const [appointments, setAppointments] = useState(apps);

  return (
    <div>
      <h2>Estado actual de turnos del usuario</h2>
      <Appointments appointments={appointments} />
    </div>
  );
};

export default MisTurnos;
