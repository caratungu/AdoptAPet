import { useDispatch, useSelector } from "react-redux";
import { cancelAppointment, getAppointments } from "../../../helpers/functions";
import styles from "./StatusA.module.css";
import Swal from "sweetalert2";
import { getAllAppointments } from "../../../redux/slices";


const StatusA = ({ appId, statusA, date }) => {
  const userId = useSelector((state) => state.user.user.id);
  const dispatch = useDispatch();

  function handleOnClick() {
    Swal.fire({
      title: "Advertencia!",
      text: "¿Estás seguro de cancelar la cita",
      icon: "warning",
      showCancelButton: true,
      candelButtonText: "No",
      confirmButtonColor: "#0a1148",
      confirmButtonText: "Completamente",
    }).then((result) => {
      if (result.isConfirmed) {
        cancelAppointment(appId)
          .then((res) => {
            Swal.fire({
              icon: "warning",
              text: res.message,
              confirmButtonColor: "#0a1148",
            });
            getAppointments(userId)
              .then((res) => dispatch(getAllAppointments(res)))
              .catch((error) => {
                Swal.fire({
                  icon: "warning",
                  text: error,
                  confirmButtonColor: "#0a1148",
                });
              })
          })
          .catch((err) => {
            Swal.fire({
              icon: "warning",
              text: err,
              confirmButtonColor: "#0a1148",
            });
          });
      } else {
        Swal.fire({
          icon: "warning",
          text: "No se canceló la cita",
          confirmButtonColor: "#0a1148",
        });
      }
    });
  }

  return (
    <>
      {statusA === "Activo" && (
        <div onClick={handleOnClick} className={styles.active}>
          {statusA}
        </div>
      )}
      {statusA === "Cancelado" && (
        <div className={styles.cancelled}>{statusA}</div>
      )}
      {statusA === "Atendido" && (
        <div className={styles.attended}>{statusA}</div>
      )}
    </>
  );
};

export default StatusA;
