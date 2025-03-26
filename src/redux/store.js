import addCredentialReducers from "../redux/slice/addCredentialSlice.js";
import { configureStore } from "@reduxjs/toolkit";
export const store = configureStore({
  reducer: {
    addCredential: addCredentialReducers,
  },
});
