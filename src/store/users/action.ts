import { createAsyncThunk } from "@reduxjs/toolkit";
import { getUsersList } from "./api";

//get users list from 2 apis by pages
export const getUsersListAction = createAsyncThunk("users/list", async () => {
  const response1 = await getUsersList();

  const list = await response1.data;

  return [...list.data];
});
