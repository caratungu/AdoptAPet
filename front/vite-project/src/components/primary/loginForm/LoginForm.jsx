import { useState } from "react";
import styles from "./LoginForm.module.css";
import { loginUser, validateLogin } from "../../../helpers/functions";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { userInfo } from "../../../redux/slices";
import Swal from "sweetalert2";

const LoginForm = () => {
  const user = useSelector((state) => state.user)
  const dispatch = useDispatch()

  const [userData, setUserData] = useState({
    username: "",
    password: "",
  });

  const [statusBtn, setStatusBtn] = useState(true);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    const userDataActual = { ...userData, [name]: value };
    setUserData({
      ...userData,
      [name]: value,
    });

    setStatusBtn(validateLogin(userDataActual));
  };

  const navigate = useNavigate();

  const handleOnSubmit = (e) => {
    e.preventDefault();
    loginUser(userData)
      .then((res) => {
        Swal.fire({
          text: res.message,
          confirmButtonColor: "#0a1148",
        });
        dispatch(userInfo(res));
        navigate("/");
      })
      .catch((error) => {
        Swal.fire({
          text: error.response.data,
          confirmButtonColor: "#0a1148",
        });
        dispatch(userInfo({}));
      });

  };

  return (
    <form className={styles.formLogin} onSubmit={handleOnSubmit}>
      <h2 className={styles.title}>Ingreso</h2>
      <div className={styles.inputsContainer}>
        <label htmlFor="username">Username:</label>
        <input
          className={styles.inputs}
          type="text"
          name="username"
          id="username"
          value={userData.username}
          placeholder="pepitoperez"
          onChange={handleInputChange}
        />
      </div>
      <div className={styles.inputsContainer}>
        <label htmlFor="password">Contraseña:</label>
        <input
          className={styles.inputs}
          type="password"
          name="password"
          value={userData.password}
          placeholder="**********"
          onChange={handleInputChange}
        />
      </div>
      <div className={styles.btns}>
        <button className={styles.button} disabled={statusBtn}>Acceder</button>
        <a className={styles.register} href="/users/register">Registrarse</a>
      </div>
    </form>
  );
};

export default LoginForm;
