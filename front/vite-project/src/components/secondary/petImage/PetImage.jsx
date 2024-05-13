import styles from "./PetImage.module.css";

const PetImage = ({ namePet, imgPet }) => {
  return (
    <div className={styles.pet}>
      <img className={styles.petImage} src={imgPet} alt="Mascota" />
      <p className={styles.petName}>{namePet}</p>
    </div>
  );
};

export default PetImage;
