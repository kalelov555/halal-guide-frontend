import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  createRestaurant,
  getRestarauntsList,
  updateRestaraunts,
} from "./api";
import { RestarauntApi } from "@/typings/restaraunts";

//get users list from 2 apis by pages
export const getRestarauntsListAction = createAsyncThunk(
  "restaraunts/list",
  async () => {
    const response = await getRestarauntsList();

    const list = await response.data;

    return list.filter((r: any) => r.hasParking === true);
  }
);

export const getAdminRestatauntsListAction =
  createAsyncThunk("restarauntsAdmin/list", async () => {
    const response = await getRestarauntsList();

    const list = await response.data;

    return list.filter((r: any) => r.hasParking === false);
  });

export const createNewRestaurantAction = createAsyncThunk(
  "restaraurants/create",
  async (body: any) => {
    const response = await createRestaurant(body);

    const restaurant = await response.data;

    return restaurant;
  }
);

export const updateRestarauntAction = createAsyncThunk(
  "restaraunts/update",
  async (body: RestarauntApi) => {
    const response = await updateRestaraunts(body);

    const restaurant = await response.data;

    return restaurant;
  }
);
