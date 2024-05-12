import styles from "./Carousel.module.css";
import { PetImage } from "../../secondary";
import { pets } from "../../../helpers/DB/pets";
import { useState } from "react";

const Carrusel = () => {
  const [petArray, setPetArray] =useState(pets)
  return (
    <div className={styles.carrusel}>
      {petArray.map((pet) => {
        return <PetImage namePet={pet.name} imgPet={pet.image} />
      })}
    </div>
  );
};

export default Carrusel;
