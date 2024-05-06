import { CredentialModel } from "../config/data-source";
import ICredentialsDto from "../dto/CredentialsDto";
import { Credential } from "../entities/Credential";

export const createCredentialsService = async (credentialData: ICredentialsDto): Promise<Credential> => {
  const newCredential = await CredentialModel.create(credentialData);
  const results = await CredentialModel.save(newCredential);
  
  return results;
};

export const validateCredentialService = async (credentialData: ICredentialsDto): Promise<number | string> => {
  const checkCredential: Credential | null = await CredentialModel.findOneBy({
    username: credentialData.username,
  })
  if (checkCredential) {
    if (checkCredential.password === credentialData.password) {
      return checkCredential.id
    } else {
      return "Credenciales de usuario inválidas";
    }
  } else {
    return "Credenciales de usuario inválidas";
  }
};
