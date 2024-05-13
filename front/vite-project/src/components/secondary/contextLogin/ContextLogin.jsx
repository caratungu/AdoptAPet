import PawPrints from "../pawPrints/PawPrints";
import styles from "./ContextLogin.module.css";

const ContextLogin = () => {
  return (
    <div className={styles.container}>
      <div>
        <h1 className={styles.title}>Adopt A Pet</h1>
        <p className={styles.text}>
          Unete a nuestra familia y ayuda un pelido a tener un mejor transitar
          por esta vida
        </p>
      </div>
      <PawPrints />
    </div>
  );
};

export default ContextLogin;
