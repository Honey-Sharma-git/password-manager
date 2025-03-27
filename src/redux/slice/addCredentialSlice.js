import { createSlice } from "@reduxjs/toolkit";

const initialState = false;

const addCredentialSlice = createSlice({
  name: "addCredential",
  initialState: initialState,
  reducers: {
    addCredential: (state, action) => {
      return !state;
    },
  },
});

export const { addCredential } = addCredentialSlice.actions;
export default addCredentialSlice.reducer;
