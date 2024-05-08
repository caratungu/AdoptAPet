import styles from "./Carrusel.module.css";
import PetImage from "./PetImage";

const Carrusel = () => {
  return (
    <div className={styles.carrusel}>
      <PetImage />
      <PetImage />
      <PetImage />
      <PetImage />
      <PetImage />
      <PetImage />
    </div>
  );
};

export default Carrusel;
