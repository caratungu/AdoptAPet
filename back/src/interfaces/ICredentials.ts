interface ICredentials {
  id: number,
  username: string; //! Debe ser único
  password: string;
}

export default ICredentials;