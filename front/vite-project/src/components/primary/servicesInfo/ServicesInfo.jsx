import { useSelector } from "react-redux";
import styles from "./ServicesInfo.module.css";

const ServicesInfo = () => {
  const allServices = useSelector((state) => state.services);
  return (
    <div className={styles.container}>
    {
      allServices.map((service) => {
        return (
          <div className={styles.containerServices}>
            <div>
              <h2>{service.name}</h2>
            </div>
            <div></div>
            <div className={styles.description}>
              <p>{service.description}</p>
            </div>
          </div>
        )
      })
    }
    </div>
  );
};

export default ServicesInfo;
