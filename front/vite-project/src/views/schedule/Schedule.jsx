import { useEffect, useState } from "react";
import { ScheduleForm } from "../../components/primary";
import { getServices } from "../../helpers/functions";
import styles from './Schedule.module.css'
import { useDispatch, useSelector } from "react-redux";
import { getAllServices } from "../../redux/slices";

const Schedule = () => {
  const services = useSelector((state) => state.services)
  const dispatch = useDispatch();

  useEffect(() => {
    getServices()
      .then((res) => {
        dispatch(getAllServices(res));
      })
      .catch((error) => {
        Swal.fire({
          text: error,
          confirmButtonColor: "#0a1148",
        });
      });
  }, []);

  return (
    <div className={styles.container}>
        {services.length !== 0 ? <ScheduleForm /> : <h1>No hay servicios</h1>}
    </div>
  );
};

export default Schedule;
