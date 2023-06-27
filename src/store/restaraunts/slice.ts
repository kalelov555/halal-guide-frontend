import { createSlice } from "@reduxjs/toolkit";
import {
  createNewRestaurantAction,
  getAdminRestatauntsListAction,
  getRestarauntsListAction,
  updateRestarauntAction,
} from "./action";
import type { User } from "../../typings/user";
import { RestarauntApi } from "@/typings/restaraunts";

type RestarauntsState = {
  adminRestaraunts: RestarauntApi[];
  restaraunts: RestarauntApi[];
  status: "idle" | "loading" | "succeeded";
  updatingStatus: "idle" | "loading" | "succeeded";
};

const initialState: RestarauntsState = {
  adminRestaraunts: [],
  restaraunts: [],
  status: "idle",
  updatingStatus: "idle",
};

export const restarauntsSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: (builder) =>
    builder
      .addCase(
        getRestarauntsListAction.pending,
        (state) => {
          state.status = "loading";
        }
      )
      .addCase(
        getRestarauntsListAction.fulfilled,
        (state, action) => {
          state.status = "succeeded";
          if (action.payload)
            state.restaraunts = action.payload;
        }
      )
      .addCase(
        createNewRestaurantAction.pending,
        (state) => {
          state.status = "loading";
        }
      )
      .addCase(
        createNewRestaurantAction.fulfilled,
        (state, action) => {
          state.status = "succeeded";
        }
      )
      .addCase(
        getAdminRestatauntsListAction.pending,
        (state) => {
          state.status = "loading";
        }
      )
      .addCase(
        getAdminRestatauntsListAction.fulfilled,
        (state, action) => {
          state.status = "succeeded";
          if (action.payload)
            state.adminRestaraunts = action.payload;
        }
      )
      .addCase(updateRestarauntAction.pending, (state) => {
        state.updatingStatus = "loading";
      })
      .addCase(
        updateRestarauntAction.fulfilled,
        (state, action) => {
          state.updatingStatus = "succeeded";
        }
      ),
});

export default restarauntsSlice.reducer;
