import axios from "axios";

export async function createUser(dataUser) {
  const userInfoRegister = {
    name: dataUser.name,
    email: dataUser.email,
    phone: dataUser.phone,
    birthdate: dataUser.birthdate,
    nDni: dataUser.nDni,
    photo: dataUser.photo,
    username: dataUser.username,
    password: dataUser.password,
  };
  const response = await axios.post("http://localhost:3000/users/register", userInfoRegister);
  return response.data.message;
}

export async function loginUser(dataUser) {
  const response = await axios.post("http://localhost:3000/users/login", dataUser);
  return response.data;
}
