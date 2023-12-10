// features/user/userSlice.js
import { createSlice } from "@reduxjs/toolkit";

const GuideSlice = createSlice({
  name: "guide",
  initialState: {
    data: {}
  },
  reducers: {
    setGuide: (state, action) => {
      return { ...state, data: action.payload };
    },
    clearGuide: (state) => {
      return {};
    },
  },
});

export const { setGuide, clearGuide } = GuideSlice.actions;

export default GuideSlice.reducer;
