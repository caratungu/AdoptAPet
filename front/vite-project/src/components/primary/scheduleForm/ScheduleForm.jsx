import { useState } from "react";
import styles from "./ScheduleForm.module.css";
import { createAppointment, validateSchedule, validateScheduleAllFields } from "../../../helpers/functions";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Swal from "sweetalert2";

const ScheduleForm = () => {
  const allServices = useSelector((state) => state.services)
  const userId = useSelector((state) => state.user.user.id)
  
  const [service, setService] = useState("");

  const [statusBtn, setStatusBtn] = useState(true);

  const [appData, setAppData] = useState({
    dateAppointment: "",
    timeAppointment: "",
    serviceId: "",
  });

  const [errors, setErrors] = useState({
    dateAppointment: "",
    timeAppointment: "",
    serviceId: "",
  });

  function handleInputChange(e) {
    if (e.target.name === "serviceId") {
      const service = allServices[e.target.value].description;
      setService(service);
    }
    
    const { name, value } = e.target;
    
    const appDataActual = { ...appData, [name]: value };
    setAppData({
      ...appData,
      [name]: value,
    });

    const errorsFromUser = validateSchedule(appDataActual);
    setErrors(errorsFromUser);

    setStatusBtn(validateScheduleAllFields(appDataActual, errorsFromUser));
  }

  const navigate = useNavigate();

  function handleOnSubmit (e) {
    e.preventDefault();
    createAppointment(appData, userId)
    .then((res) => {
      Swal.fire({
        text: res.message,
        confirmButtonColor: "#0a1148",
      });
      navigate("/turns")
    })
    .catch((error) => {
      Swal.fire({
        text: error.response.data.message,
        confirmButtonColor: "#0a1148",
      });
    })
  };

  return (
    <form onSubmit={handleOnSubmit}>
      <h1>Agendar cita</h1>
      <p>Recuerde que la cita debe ser solicitada para fechas posteriores a hoy y en una franja horaria entre las 8:00 y las 17:00</p>
      <div className={styles.container}>
        <div className={styles.inputs}>
          <label htmlFor="dateAppointment">Fecha:</label>
          <input
            className={styles.inputs}
            type="date"
            name="dateAppointment"
            id="dateAppointment"
            value={appData.dateAppointment}
            onChange={handleInputChange}
          />
          <p>{errors.dateAppointment}</p>
        </div>
        <div className={styles.inputs}>
          <label htmlFor="timeAppointment">Hora:</label>
          <input
            className={styles.inputs}
            type="time"
            name="timeAppointment"
            id="timeAppointment"
            value={appData.timeAppointment}
            onChange={handleInputChange}
          />
          <p>{errors.timeAppointment}</p>
        </div>
        <div className={styles.inputs}>
          <div>
            <label htmlFor="serviceId">Servicio:</label>
            <div className={styles.container2}>
              <select
                id="serviceId"
                name="serviceId"
                className={styles.select}
                onChange={handleInputChange}
              >
                <option value="" selected disabled>
                  Selecciona una opción
                </option>
                {allServices.map((service) => {
                  return (
                    <option key={service.id} value={service.id - 1}>
                      {service.name}
                    </option>
                  );
                })}
              </select>
              <p className={styles.description}>{service}</p>
            </div>
          </div>
          <p>{errors.serviceId}</p>
        </div>
      </div>
      <button className={styles.button} disabled={statusBtn}>
        Agendar
      </button>
    </form>
  );
};

export default ScheduleForm;
