import { useState } from "react";
import styles from "./LoginForm.module.css";
import { loginUser, validateLogin } from "../../../helpers/functions";

const LoginForm = () => {
  const [userData, setUserData] = useState({
    username: "",
    password: "",
  });

  const [statusBtn, setStatusBtn] = useState (true);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    const userDataActual = {...userData, [name]: value };
    setUserData({
      ...userData,
      [name]: value,
    });

    setStatusBtn(validateLogin(userDataActual))
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    loginUser(userData)
    .then((res) => alert(res.message))
    .catch((error) => alert(error.response.data))
  };

  return (
    <form className={styles.formLogin} onSubmit={handleOnSubmit}>
      <h2 className={styles.title}>Ingreso</h2>
      <div className={styles.inputsContainer}>
        <label>Username:</label>
        <input
          className={styles.inputs}
          type="text"
          name="username"
          value={userData.username}
          placeholder="pepitoperez"
          onChange={handleInputChange}
        />
      </div>
      <div className={styles.inputsContainer}>
        <label>Contraseña:</label>
        <input
          className={styles.inputs}
          type="password"
          name="password"
          value={userData.password}
          placeholder="**********"
          onChange={handleInputChange}
        />
      </div>
      <button className={styles.button} disabled={statusBtn}>Acceder</button>
      <div className={styles.register}>
        <a href="#">Registrarse</a>
      </div>
    </form>
  );
};

export default LoginForm;
