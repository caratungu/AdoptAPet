import styles from "./CardsPet.module.css";
import { allPets } from "../../../helpers/DB/allPets";
import { Pet } from "../../secondary";

const CardsPets = () => {
  return (
    <div className={styles.container}>
      {allPets.map((pet) => {
        return <Pet pet={pet} />;
      })}
    </div>
  );
};

export default CardsPets;
