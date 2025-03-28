import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const domainSlice = createSlice({
  name: "domains",
  initialState: initialState,
  reducers: {
    setDomains: (state, action) => {
      return action.payload;
    },
    sortDomains: (state, action) => {
      return state.sort((a, b) => {
        const { sortBy, sortOrder } = action.payload;
        let x = a[sortBy].toLowerCase();
        let y = b[sortBy].toLowerCase();
        if (x > y) {
          if (sortOrder === "asc") {
            return 1;
          } else if (sortOrder === "dsc") {
            return -1;
          }
        }
        if (x < y) {
          if (sortOrder === "asc") {
            return -1;
          } else if (sortOrder === "dsc") {
            return 1;
          }
        }
        return 0;
      });
    },
  },
});

export default domainSlice.reducer;
export const { setDomains, sortDomains } = domainSlice.actions;
