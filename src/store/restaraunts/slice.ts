import { createSlice } from "@reduxjs/toolkit";
import { getRestarauntsListAction } from "./action";
import type { User } from "../../typings/user";
import { RestarauntApi } from "@/typings/restaraunts";

type RestarauntsState = {
  restaraunts: RestarauntApi[];
  status: "idle" | "loading" | "succeeded";
};

const initialState: RestarauntsState = {
  restaraunts: [],
  status: "idle",
};

export const restarauntsSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: (builder) =>
    builder
      .addCase(getRestarauntsListAction.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getRestarauntsListAction.fulfilled, (state, action) => {
        state.status = "succeeded";
        if (action.payload) state.restaraunts = action.payload;
      })
});

export default restarauntsSlice.reducer;
