import styles from "./AllServices.module.css";
import { ServicesInfo } from "../../components/primary";
import { Link } from "react-router-dom";

const AllServices = () => {
  return (
    <div className={styles.container}>
      <h2> En Adopt A Pet ofrecemos los siguientes servicios</h2>
      <ServicesInfo />
      <p>Te invitamos a nuestras instalaciones y conocer un poco más de nuestros servicios.</p>
      <h2 className={styles.logueate}><Link to="/users/login">¡Accede y agenda tu cita!</Link></h2>
    </div>
  );
};

export default AllServices;
