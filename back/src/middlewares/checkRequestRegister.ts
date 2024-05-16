import { NextFunction, Request, Response } from 'express';
import { isUsernameUnique } from '../helpers/usernameUnique'

export const checkRequestRegister = async (req: Request, res: Response, next: NextFunction) => {
  const { name, nDni, email, birthdate, photo, phone, username, password } = req.body;
  
  let validateUsername = false;
  
  await isUsernameUnique(username)
  .then((res) => {
    validateUsername = res;
  })
  .catch((err) => {
    console.log(err);
  })
  
  console.log(validateUsername);
  

  if (
    !name ||
    !nDni ||
    !email ||
    !birthdate ||
    !photo ||
    !phone ||
    !username ||
    !password
  ) {
    return res.status(400).json({message: "Información incompleta"});
  } else if (validateUsername) {
    next();
  } else {
    return res.status(400).json({message: "En el middleware su usuario ya existe" });
  }
}
