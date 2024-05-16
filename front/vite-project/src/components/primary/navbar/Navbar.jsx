import styles from "./Navbar.module.css";
import { Logo } from "../../secondary";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getAllAppointments, userInfo } from "../../../redux/slices";

const Navbar = () => {
  const user = useSelector((state) => state.user.user);
  const dispatch = useDispatch();

  function handleOnClick() {
    dispatch(userInfo({}));
    dispatch(getAllAppointments([]));
  }

  return (
    <div className={styles.container}>
      <div className={styles.logoname}>
        <Logo />
        <h2>AdoptAPet</h2>
      </div>
      <div className={styles.userMenu}>
        <div className={styles.user}>
          {user ? <h3 className={styles.userName}>{user?.name}</h3> : <h4 className={styles.userName}>Usuario sin identificarse</h4>}
        </div>
        <div className={styles.menu}>
          <Link className={styles.menuLink} to="/">Home</Link>
          <Link className={styles.menuLink} to="/pets">Pets</Link>
          <Link className={styles.menuLink} to="#">Contact</Link>
          <Link className={styles.menuLink} to="/services">Servicios</Link>
          <Link className={styles.menuLink} to="/about">About</Link>
          {user ? (<Link className={styles.menuLink} to="/turns">Turnos</Link>) : (<Link className={styles.menuLink} to="/users/login">Login</Link>)}
          {user && (<Link className={styles.menuLink} to="/" onClick={handleOnClick}>Salir</Link>)}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
