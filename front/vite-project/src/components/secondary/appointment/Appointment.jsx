import { StatusA } from "../../secondary";
import styles from "./Appointment.module.css";

const Appointment = ({ appointment }) => {
  return (
    <tr className={styles.tr}>
      <td className={styles.td}>{appointment.dateRequest}</td>
      <td className={styles.td}>{appointment.timeRequest}</td>
      <td className={styles.td}>{appointment.dateAppointment}</td>
      <td className={styles.td}>{appointment.timeAppointment}</td>
      <td className={styles.td}>{appointment.service.name}</td>
      <td className={styles.td}><StatusA statusA={appointment.status} /></td>
    </tr>
  );
};

export default Appointment;
