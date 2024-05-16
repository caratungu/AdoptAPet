import { useEffect } from "react";
import { Appointments } from "../../components/primary";
import styles from "./MisTurnos.module.css";
import { getAppointments } from "../../helpers/functions/appointments/appointmentsFunctions";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getAllAppointments } from "../../redux/slices";

const MisTurnos = () => {
  const userId = useSelector((state) => state.user.user?.id)
  const appos = useSelector((state) => state.userAppointments)
  const dispatch = useDispatch();

  const navigate = useNavigate();

  function handleOnClick () {
    navigate("/turns/schedule")
  }

  useEffect(() => {
    getAppointments(userId)
      .then((res) => dispatch(getAllAppointments(res)))
      .catch((error) => {
        Swal.fire({
          text: error,
          confirmButtonColor: "#0a1148",
        });
      })
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.container2} >
        <div className={styles.container2_1}></div>
        <div className={styles.container2_2}>
          <h2 className={styles.title}>Estado actual de turnos del usuario</h2>
        </div>
        <div className={styles.container2_1}>
          <button className={styles.btn} onClick={handleOnClick}>Agendar cita</button>
        </div>
      </div>
      <p>Si desea cancelar alguna cita, debe hacer click en el boton donde se indica el estado "Activo".</p>
      <p>Recuerde que una vez cancelada una cita, ésta no se podrá recuperar.</p>
      {appos.length > 0 ? (
        <Appointments />
      ) : (
        <h3>No hay citas agendadas</h3>
      )}
    </div>
  );
};

export default MisTurnos;
