import styles from "./Navbar.module.css";
import { Logo } from "../../secondary";

const Navbar = () => {
  let user="alogin";
  return (
    <div className={styles.container}>
      <div className={styles.logoname}>
        <Logo />
        <h2>AdoptAPet</h2>
      </div>
      <div className={styles.menu}>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">Pets</a></li>
          <li><a href="#">Contact</a></li>
          <li><a href="#">Servicios</a></li>
          {user==="login" ? <li><a href="#">Turnos</a></li> : <li><a href="#">Login</a></li>}
          {user==="login" && <li><a href="#">Salir</a></li>}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
