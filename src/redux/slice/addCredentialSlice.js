import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

const addCredentialSlice = createSlice({
  name: "addCredential",
  initialState: initialState,
  reducers: {
    increment: () => {},
  },
});

export const { increment } = addCredentialSlice.actions;
export default addCredentialSlice.reducer;
