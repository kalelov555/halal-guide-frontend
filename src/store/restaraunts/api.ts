import { api } from "@/services/api";
import { RestarauntApi } from "@/typings/restaraunts";

export const getRestarauntsList = async () => {
  return api.get("/restaurants");
};

export const createRestaurant = async (data: any) => {
  return api.post("/restaurants", data);
};

export const updateRestaraunts = async (
  data: RestarauntApi
) => {
  return api.patch(`/restaurants/${data.id}`, data);
};
