import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const addCredentialSlice = createSlice({
  name: "addCredential",
  initialState: initialState,
  reducers: {
    addCredential: (state, action) => {
      state.push(action.payload);
    },
  },
});

export const { addCredential } = addCredentialSlice.actions;
export default addCredentialSlice.reducer;
