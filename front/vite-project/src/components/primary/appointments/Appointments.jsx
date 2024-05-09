import { Appointment } from "../../secondary";
import styles from "./Appointments.module.css";

const Appointments = ({ appointments }) => {
  return (
    <table className={styles.table}>
      <tbody>
        <tr className={styles.tr}>
          <td className={styles.td}>Fecha de solicitud</td>
          <td className={styles.td}>Hora de solicitud</td>
          <td className={styles.td}>Fecha agendada</td>
          <td className={styles.td}>Hora agendada</td>
          <td className={styles.td}>Servicio</td>
          <td className={styles.td}>Estado</td>
        </tr>
        {appointments.map((appointment, index) => {
          return <Appointment key={index} appointment={appointment} />;
        })}
      </tbody>
    </table>
  );
};

export default Appointments;
