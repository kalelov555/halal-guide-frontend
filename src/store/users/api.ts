import { usersApi } from "../../services/api";

export const getUsersList = async () => {
  return usersApi.get("/users");
};
