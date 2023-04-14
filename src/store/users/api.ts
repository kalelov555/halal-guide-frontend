import { api } from "../../services/api";

export const getUsersList = async () => {
  return api.get("/users");
};
