import { createSlice } from "@reduxjs/toolkit";

const initialState = false;

const shareDomainModalSlice = createSlice({
  name: "showDomainShareModal",
  initialState: initialState,
  reducers: {
    showDomainShareModal: (state, action) => {
      return !state;
    },
    shareDomainID: (state, action) => {
      return action.payload;
    },
  },
});

export default shareDomainModalSlice.reducer;
export const { showDomainShareModal, shareDomainID } =
  shareDomainModalSlice.actions;
