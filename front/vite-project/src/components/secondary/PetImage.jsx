import styles from "./PetImage.module.css";
import image from "../../assets/img/pets/dogs/luke.jpg";

const PetImage = () => {
  return (
    <div className={styles.pet}>
      <img className={styles.petImage} src={image} alt="Mascota" />
      <spam className={styles.petName}>Luke</spam>
    </div>
  );
};

export default PetImage;
