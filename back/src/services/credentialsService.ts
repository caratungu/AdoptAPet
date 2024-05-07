import { log } from "console";
import { CredentialModel } from "../config/data-source";
import ICredentialsDto from "../dto/CredentialsDto";
import { Credential } from "../entities/Credential";

export const createCredentialsService = async (credentialData: ICredentialsDto): Promise<number> => {
  const newCredential = await CredentialModel.create(credentialData);
  const results = await CredentialModel.save(newCredential);
  
  return results.id;
};

export const validateCredentialService = async (credentialData: ICredentialsDto): Promise<number> => {
  const checkCredential: Credential | null = await CredentialModel.findOneBy({
    username: credentialData.username,
  })
  console.log(checkCredential);
  
  if (checkCredential && checkCredential.password === credentialData.password) {
    return checkCredential.id;
  } else {
    throw Error ("Credenciales de usuario inválidas");
  }
};
