import { createAsyncThunk } from "@reduxjs/toolkit";
import { getRestarauntsList } from "./api";

//get users list from 2 apis by pages
export const getRestarauntsListAction = createAsyncThunk("restaraunts/list", async () => {
  const response = await getRestarauntsList();

  const list = await response.data;

  console.log('list', list)

  return list
});
