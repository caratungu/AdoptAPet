import { CredentialModel } from "../config/data-source";
import ICredentialsDto from "../dto/CredentialsDto";
import { Credential } from "../entities/Credential";
import { isUsernameUnique } from "../helpers/usernameUnique";

export const createCredentialsService = async (credentialData: ICredentialsDto): Promise<number> => {
  if (await isUsernameUnique(credentialData.username)) {
    const newCredential = await CredentialModel.create(credentialData);
    const results = await CredentialModel.save(newCredential);
    return results.id;
  } else {
    throw Error ("El nombre de usuario ya existe");
  }
};

export const validateCredentialService = async (credentialData: ICredentialsDto): Promise<number> => {
  const checkCredential: Credential | null = await CredentialModel.findOne({
    where: {
      username: credentialData.username,
    },
    select: {
      id: true,
      username: true,
      password: true,
    },
  });

  if (checkCredential && checkCredential.password === credentialData.password) {
    return checkCredential.id;
  } else {
    throw Error("Credenciales de usuario inválidas");
  }
};
