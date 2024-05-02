interface IUser {
  id: number;
  name: string;
  email: string;
  phone: number,
  birthdate: Date;
  nDni: number;
  picture: string; //! Revisar
  credentialsId: number;
}

export default IUser;