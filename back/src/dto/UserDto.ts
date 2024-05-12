interface IUserDto {
  name: string;
  email: string;
  phone: BigInt,
  birthdate: Date;
  nDni: number;
  photo: string; //! Revisar
}

export default IUserDto;