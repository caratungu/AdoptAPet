import { useSelector } from "react-redux";
import { Appointment } from "../../secondary";
import styles from "./Appointments.module.css";

const Appointments = () => {
  const appos = useSelector((state) => state.userAppointments)
  return (
    <div className={styles.container}>
        {appos.map((appointment, index) => {
            return <Appointment key={index} appointment={appointment} />;
        })}
    </div>
  );
};

export default Appointments;
