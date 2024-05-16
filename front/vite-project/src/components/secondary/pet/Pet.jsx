import styles from "./Pet.module.css";
import { useState } from "react";

const Pet = ({pet}) => {
  const [flipped, setFlipped] = useState(false);

  const flipCard = (pet) => {
    setFlipped(!flipped);
  };

  return (
    <div className={`${styles.cardContainer} ${flipped ? styles.flipped : ""}`} onClick={flipCard}>
      <div className={styles.card}>
        <div className={styles.cardFront}>
          <img className={styles.photo} src={pet.url} />
          <p className={styles.name}>{pet.name}</p>
          <p className={styles.age}>Años: {pet.age}</p>
        </div>
        <div className={styles.cardBack}>
          <p className={styles.name}>{pet.name}</p>
          <p>{pet.description}</p>
        </div>
      </div>
    </div>
  );
};

export default Pet;
