import { useEffect, useState } from "react";
import { Appointments } from "../../components/primary";
import { appointments as apps } from "../../helpers/myTurns";
import styles from "./MisTurnos.module.css";
import axios from "axios";

const MisTurnos = () => {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3000/appointments").then((res) => setAppointments(res.data));
  }, []);

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Estado actual de turnos del usuario</h2>
      {console.log(appointments)}
      <Appointments appointments={appointments} />
    </div>
  );
};

export default MisTurnos;
