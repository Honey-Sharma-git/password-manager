import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const domainSlice = createSlice({
  name: "domains",
  initialState: initialState,
  reducers: {
    setDomains: (state, action) => {
      return action.payload;
    },
  },
});

export default domainSlice.reducer;
export const { setDomains } = domainSlice.actions;
