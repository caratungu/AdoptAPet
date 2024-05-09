import adoptapet from '../../../assets/img/adoptapet.jpg';
import styles from './Logo.module.css';

const Logo = () => {

    return (
        <div>
            <img className={styles.logo} src={adoptapet} alt="Logo" />
        </div>
    )
}

export default Logo;