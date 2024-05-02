import ICredentialsDto from "../dto/CredentialsDto";
import ICredentials from "../interfaces/ICredentials";

let credentials: ICredentials[] = [
  {
    id: 1,
    username: "carlostunjano",
    password: "Password#01",
  },
  {
    id: 2,
    username: "erikacortes",
    password: "Password#02",
  },
  {
    id: 3,
    username: "marinagutierrez",
    password: "Password#03",
  },
];
let newCredentialId = 3;

export const createCredentialsService = async (credentialData: ICredentialsDto): Promise<number> => {
  newCredentialId++;
  credentials.push({
    id: newCredentialId,
    username: credentialData.username,
    password: credentialData.password,
  });
  return newCredentialId;
};

export const validateCredentialService = async (credentialData: ICredentialsDto): Promise<number | string> => {
  let userCredentials: ICredentials[] = credentials.filter(
    (credential: ICredentials) => {
      if (credential.username === credentialData.username) {
        if (credential.password === credentialData.password) {
          return credential;
        }
      }
    }
  );
  if (userCredentials.length === 1) {
    return userCredentials[0].id;
  } else {
    return "Credenciales de usuario inválidas";
  }
};
