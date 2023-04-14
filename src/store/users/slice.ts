import { createSlice } from "@reduxjs/toolkit";
import { getUsersListAction } from "./action";
import type { User } from "../../typings/user";

type UsersState = {
  users: User[];
  status: "idle" | "loading" | "succeeded";
  bro: any
};

const initialState: UsersState = {
  users: [],
  status: "idle",
  bro: {}
};

export const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: (builder) =>
    builder
      .addCase(getUsersListAction.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getUsersListAction.fulfilled, (state, action) => {
        state.status = "succeeded";
        if (action.payload) state.users = action.payload;
      })
});

export default usersSlice.reducer;
