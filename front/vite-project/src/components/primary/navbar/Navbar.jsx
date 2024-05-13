import styles from "./Navbar.module.css";
import { Logo } from "../../secondary";
import { Link } from "react-router-dom";

const Navbar = () => {
let isLogin = false;

  return (
    <div className={styles.container}>
      <div className={styles.logoname}>
        <Logo />
        <h2>AdoptAPet</h2>
      </div>
      <div className={styles.menu}>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="#">Pets</Link></li>
          <li><Link to="#">Contact</Link></li>
          <li><Link to="#">Servicios</Link></li>
          <li><Link to="/about">About</Link></li>
          {isLogin ? <li><Link to="#">Turnos</Link></li> : <li><Link to="/users/login">Login</Link></li>}
          {isLogin && <li><Link to="#">Salir</Link></li>}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
