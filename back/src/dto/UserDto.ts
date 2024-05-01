interface IUserDto {
  firstName: string;
  lastName: string;
  nickname: string; //! Se debe validar que sea único
  email: string;
  phone: number;
  picture: string; //! Revisar
  credential: string; //! Revisar
}

export default IUserDto;