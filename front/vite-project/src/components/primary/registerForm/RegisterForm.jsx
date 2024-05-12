import { useState } from "react";
import styles from "./RegisterForm.module.css";
import { createUser, validateAllFields, validateRegister } from "../../../helpers/functions";

const RegisterForm = () => {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    email2: "",
    phone: 0,
    birthdate: "",
    nDni: 0,
    picture: "",
    username: "",
    password: "",
    password2: "",
  });

  const [errors, setErrors] = useState({
    name: "El Nombre es requerido",
    email: "El email es requerido",
    email2: "El email es requerido",
    phone: "El número de teléfono es requerido",
    birthdate: "",
    nDni: "El número de documento es requerido",
    picture: "",
    username: "Username is required",
    password: "Password is required",
    password2: "Password is required",
  });

  const [statusBtn, setStatusBtn] = useState(true);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    const userDataActual = { ...userData, [name]: value };
    setUserData({
      ...userData,
      [name]: value,
    });

    const errorsFromUser = validateRegister(userDataActual);
    setErrors(errorsFromUser);

    setStatusBtn(validateAllFields(userDataActual, errorsFromUser))
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    createUser(userData)
    .then((res) => alert(res))
    .catch((error) => alert(error.response.data.message))
  };
  
  return (
    <form className={styles.formLogin} onSubmit={handleOnSubmit}>
      <h2 className={styles.title}>Registro</h2>
      <div className={styles.inputsContainer2}>
        <div className={styles.inputsSubcontainer2}>
          <label>Nombre:</label>
          <input
            className={styles.inputs}
            type="text"
            name="name"
            value={userData.name}
            placeholder="Pepito Perez"
            onChange={handleInputChange}
          />
          <p>{errors.name}</p>
        </div>
        <div className={styles.inputsSubcontainer3}>
          <label>Número de identificación:</label>
          <input
            className={styles.inputs}
            type="number"
            name="nDni"
            value={userData.nDni}
            onChange={handleInputChange}
          />
          <p>{errors.nDni}</p>
        </div>
      </div>
      <div className={styles.inputsContainer2}>
        <div className={styles.inputsSubcontainer}>
          <label>Correo electónico:</label>
          <input
            className={styles.inputs}
            type="email"
            name="email"
            value={userData.email}
            placeholder="pperez@mail.com"
            onChange={handleInputChange}
          />
          <p>{errors.email}</p>
        </div>
        <div className={styles.inputsSubcontainer}>
          <label>Confirmar correo electónico:</label>
          <input
            className={styles.inputs}
            type="email"
            name="email2"
            value={userData.email2}
            placeholder="pperez@mail.com"
            onChange={handleInputChange}
          />
          <p>{errors.email2}</p>
        </div>
      </div>
      <div className={styles.inputsContainer2}>
        <div className={styles.inputsSubcontainer4}>
          <label>Número telefónico:</label>
          <input
            className={styles.inputs}
            type="number"
            name="phone"
            value={userData.phone}
            onChange={handleInputChange}
          />
          <p>{errors.phone}</p>
        </div>
        <div className={styles.inputsSubcontainer4}>
          <label>Fecha de nacimiento:</label>
          <input
            className={styles.inputs}
            type="date"
            name="birthdate"
            value={userData.birthdate}
            onChange={handleInputChange}
            />
          <p>{errors.birthdate}</p>
        </div>
        <div className={styles.inputsSubcontainer5}>
          <label>Foto de perfíl:</label>
          <input
            className={styles.inputs}
            type="text"
            name="photo"
            value={userData.photo}
            onChange={handleInputChange}
            />
          <p>{errors.photo}</p>
        </div>
      </div>
      <div className={styles.inputsContainer2}>
        <div className={styles.inputsSubcontainer6}>
          <label>Username:</label>
          <input
            className={styles.inputs}
            type="text"
            name="username"
            value={userData.username}
            placeholder="pepitoperez"
            onChange={handleInputChange}
          />
          <p>{errors.username}</p>
        </div>
        <div className={styles.inputsSubcontainer6}>
          <label>Contraseña:</label>
          <input
            className={styles.inputs}
            type="password"
            name="password"
            value={userData.password}
            placeholder="**********"
            onChange={handleInputChange}
          />
          <p>{errors.password}</p>
        </div>
        <div className={styles.inputsSubcontainer6}>
          <label>Confirmar contraseña:</label>
          <input
            className={styles.inputs}
            type="password"
            name="password2"
            placeholder="**********"
            value={userData.password2}
            onChange={handleInputChange}
          />
          <p>{errors.password2}</p>
        </div>
      </div>
      <button className={styles.button} disabled={statusBtn}>
        Registrarme
      </button>
    </form>
  );
};

export default RegisterForm;
