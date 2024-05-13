import pawPrints from '/src/assets/img/pawprint.png'
import styles from './PawPrints.module.css'

const PawPrints = () => {
    return (
        <div>
            <img className={styles.pawPrints} src={pawPrints} alt="Paw Prints" />
            <img className={styles.pawPrints} src={pawPrints} alt="Paw Prints" />
            <img className={styles.pawPrints} src={pawPrints} alt="Paw Prints" />
            <img className={styles.pawPrints} src={pawPrints} alt="Paw Prints" />
            <img className={styles.pawPrints2} src={pawPrints} alt="Paw Prints" />
            <img className={styles.pawPrints2} src={pawPrints} alt="Paw Prints" />
            <img className={styles.pawPrints2} src={pawPrints} alt="Paw Prints" />
        </div>
    )
}

export default PawPrints;