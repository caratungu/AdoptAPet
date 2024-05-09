import styles from "./PetImage.module.css";

const PetImage = ({ namePet, imgPet }) => {
  return (
    <div className={styles.pet}>
      <img className={styles.petImage} src={imgPet} alt="Mascota" />
      <spam className={styles.petName}>{namePet}</spam>
    </div>
  );
};

export default PetImage;
