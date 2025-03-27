import { createSlice } from "@reduxjs/toolkit";

const initialState = false;

const shareDomainModalSlice = createSlice({
  name: "showDomainShareModal",
  initialState: initialState,
  reducers: {
    showDomainShareModal: (state, action) => {
      return !state;
    },
  },
});

export default shareDomainModalSlice.reducer;
export const { showDomainShareModal } = shareDomainModalSlice.actions;
