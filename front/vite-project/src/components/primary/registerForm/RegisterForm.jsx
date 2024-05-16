import { useState } from "react";
import styles from "./RegisterForm.module.css";
import { createUser, validateAllFields, validateRegister } from "../../../helpers/functions";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const RegisterForm = () => {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    email2: "",
    phone: 0,
    birthdate: "",
    nDni: 0,
    photo: "",
    username: "",
    password: "",
    password2: "",
  });

  const [errors, setErrors] = useState({
    name: "El Nombre es requerido",
    email: "El email es requerido",
    email2: "El email es requerido",
    phone: "El número de teléfono es requerido",
    birthdate: "La fecha es requerida",
    nDni: "El número de documento es requerido",
    photo: "La foto es requerida",
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

  const navigate = useNavigate();

  const handleOnSubmit = (e) => {
    e.preventDefault();
    createUser(userData)
    .then((res) => {
      console.log(res);
      Swal.fire({
        text: res,
        confirmButtonColor: "#0a1148",
      });
      navigate("/users/login")
    })
    .catch((error) => {
      Swal.fire({
        text: error.response.data.message,
        confirmButtonColor: "#0a1148",
      });
    })
  };
  
  return (
    <form className={styles.formLogin} onSubmit={handleOnSubmit}>
      <h2 className={styles.title}>Registro</h2>
      <div className={styles.inputsContainer2}>
        <div className={styles.inputsSubcontainer2}>
          <label htmlFor="name">Nombre:</label>
          <input
            className={styles.inputs}
            type="text"
            name="name"
            id="name"
            value={userData.name}
            placeholder="Pepito Perez"
            onChange={handleInputChange}
          />
          <p>{errors.name}</p>
        </div>
        <div className={styles.inputsSubcontainer3}>
          <label htmlFor="nDni">Número de identificación:</label>
          <input
            className={styles.inputs}
            type="number"
            name="nDni"
            id="nDni"
            value={userData.nDni}
            onChange={handleInputChange}
          />
          <p>{errors.nDni}</p>
        </div>
      </div>
      <div className={styles.inputsContainer2}>
        <div className={styles.inputsSubcontainer}>
          <label htmlFor="email">Correo electónico:</label>
          <input
            className={styles.inputs}
            type="email"
            name="email"
            id="email"
            value={userData.email}
            placeholder="pperez@mail.com"
            onChange={handleInputChange}
          />
          <p>{errors.email}</p>
        </div>
        <div className={styles.inputsSubcontainer}>
          <label htmlFor="email2">Confirmar correo electónico:</label>
          <input
            className={styles.inputs}
            type="email"
            name="email2"
            id="email2"
            value={userData.email2}
            placeholder="pperez@mail.com"
            onChange={handleInputChange}
          />
          <p>{errors.email2}</p>
        </div>
      </div>
      <div className={styles.inputsContainer2}>
        <div className={styles.inputsSubcontainer4}>
          <label htmlFor="phone">Número telefónico:</label>
          <input
            className={styles.inputs}
            type="number"
            name="phone"
            id="phone"
            value={userData.phone}
            onChange={handleInputChange}
          />
          <p>{errors.phone}</p>
        </div>
        <div className={styles.inputsSubcontainer4}>
          <label htmlFor="birthdate">Fecha de nacimiento:</label>
          <input
            className={styles.inputs}
            type="date"
            name="birthdate"
            id="birthdate"
            value={userData.birthdate}
            onChange={handleInputChange}
            />
          <p>{errors.birthdate}</p>
        </div>
        <div className={styles.inputsSubcontainer5}>
          <label htmlFor="photo">Foto de perfíl:</label>
          <input
            className={styles.inputs}
            type="text"
            name="photo"
            id="photo"
            value={userData.photo}
            onChange={handleInputChange}
            />
          <p>{errors.photo}</p>
        </div>
      </div>
      <div className={styles.inputsContainer2}>
        <div className={styles.inputsSubcontainer6}>
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
          <p>{errors.username}</p>
        </div>
        <div className={styles.inputsSubcontainer6}>
          <label htmlFor="password">Contraseña:</label>
          <input
            className={styles.inputs}
            type="password"
            name="password"
            id="password"
            value={userData.password}
            placeholder="**********"
            onChange={handleInputChange}
          />
          <p>{errors.password}</p>
        </div>
        <div className={styles.inputsSubcontainer6}>
          <label htmlFor="password2">Confirmar contraseña:</label>
          <input
            className={styles.inputs}
            type="password"
            name="password2"
            id="password2"
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
