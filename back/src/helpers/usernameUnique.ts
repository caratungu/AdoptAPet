import { CredentialModel } from "../config/data-source";

export const isUsernameUnique = async (username: string): Promise<boolean> => {
  const usernames = await CredentialModel.find({
    where: {
      username,
    },
  });
  if (usernames.length === 0) {
    return true;
  } else {
    return false;
  }
};
