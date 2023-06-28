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
  adminStatus: "idle" | "loading" | "succeeded";
  updatingStatus:
    | "idle"
    | "loading"
    | "succeeded"
    | "failed";
  creatingStatus:
    | "idle"
    | "loading"
    | "succeeded"
    | "failed";
};

const initialState: RestarauntsState = {
  adminRestaraunts: [],
  restaraunts: [],
  status: "idle",
  updatingStatus: "idle",
  creatingStatus: "idle",
  adminStatus: "idle",
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
          state.creatingStatus = "loading";
        }
      )
      .addCase(
        createNewRestaurantAction.fulfilled,
        (state, action) => {
          state.creatingStatus = "succeeded";
        }
      )
      .addCase(
        createNewRestaurantAction.rejected,
        (state, action) => {
          state.creatingStatus = "failed";
        }
      )
      .addCase(
        getAdminRestatauntsListAction.pending,
        (state) => {
          state.adminStatus = "loading";
        }
      )
      .addCase(
        getAdminRestatauntsListAction.fulfilled,
        (state, action) => {
          state.adminStatus = "succeeded";
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
      )
      .addCase(
        updateRestarauntAction.rejected,
        (state, action) => {
          state.updatingStatus = "failed";
        }
      ),
});

export default restarauntsSlice.reducer;
