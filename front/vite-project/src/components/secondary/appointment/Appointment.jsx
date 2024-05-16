import { formatDate } from "../../../../utils";
import { StatusA } from "../../secondary";
import styles from "./Appointment.module.css";

const Appointment = ({ appointment }) => {
  return (
    <div
      className={
        appointment.status === "Activo"
          ? styles.containerA
          : appointment.status === "Cancelado"
            ? styles.containerB
            : styles.containerC
      }
    >
      <h2>{formatDate(appointment.dateAppointment)}</h2>
      <p className={styles.date}>Hora: {appointment.timeAppointment}</p>
      <p className={styles.service}>{appointment.service.name}</p>
      <StatusA appId={appointment.id} statusA={appointment.status} date={appointment.dateAppointment}/>
      <p className={styles.date2}>
        Solicitado el {formatDate(appointment.dateRequest)} a las {appointment.timeRequest} horas
      </p>
    </div>
  );
};

export default Appointment;
