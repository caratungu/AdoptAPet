export const validateRegister = (inputs) => {
  const errors = {};

  const nameRegex = /^[a-zA-Z\s]+$/;
  if (!nameRegex.test(inputs.name)) {
    errors.name = "No es un nómbre valido";
  }

  const emailRegex =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (!emailRegex.test(inputs.email)) {
    errors.email = "Correo electónico inválido";
  }
  if (!emailRegex.test(inputs.email2)) {
    errors.email2 = "Correo electónico inválido";
  }

  if (inputs.email !== inputs.email2) {
    errors.email2 = "No coincide con el correo";
  }

  const phoneRegex = /^\d{5,9}$/;
  if (!phoneRegex.test(inputs.phone)) {
    errors.phone = "Número telefónico inválido";
  }
  
  const nDniRegex = /^\d{5,9}$/;
  if (!nDniRegex.test(inputs.nDni)) {
    errors.nDni = "Número DNI inválido";
  }

  const usernameRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))$/;
  if (!usernameRegex.test(inputs.username)) {
    errors.username = "username inválido";
  }

  //! Validar unicidad del username

  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  if (!passwordRegex.test(inputs.password)) {
    errors.password = "No es segura";
  }

  if (!inputs.password2) {
    errors.password2 = "Password is required";
  }

  if (inputs.password !== inputs.password2) {
    errors.password2 = "No coinciden los password"
  }

  return errors;
};

export const validateAllFields = (inputs, errors) => {
    let err = 0;
    for (let clave in errors) {
        if (errors[clave] !== "") {
            err++
        }
    }
    return (!inputs.name || !inputs.nDni || !inputs.email || !inputs.email2 || !inputs.phone || !inputs.username || !inputs.password || !inputs.password2 || err !== 0);
}