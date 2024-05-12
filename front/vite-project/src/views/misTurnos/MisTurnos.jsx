import { useEffect, useState } from "react";
import { Appointments } from "../../components/primary";
import styles from "./MisTurnos.module.css";
import { getAppointments } from "../../helpers/functions/appointments/appointmentsFunctions";

const MisTurnos = () => {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    getAppointments()
      .then((res) => setAppointments(res))
      .catch((error) => alert(error));
  }, []);

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Estado actual de turnos del usuario</h2>
      {appointments.length > 0 ? (
        <Appointments appointments={appointments} />
      ) : (
        <h3>No hay citas agendadas</h3>
      )}
    </div>
  );
};

export default MisTurnos;
