// features/user/userSlice.js
import { createSlice } from "@reduxjs/toolkit";

const AgencySlice = createSlice({
  name: "agency",
  initialState: {
    data: {}
  },
  reducers: {
    setAgency: (state, action) => {
      return { ...state, data: action.payload };
    },
    clearAgency: (state) => {
      return {};
    },
  },
});

export const { setAgency, clearAgency } = AgencySlice.actions;

export default AgencySlice.reducer;
