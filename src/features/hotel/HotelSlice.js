// features/user/userSlice.js
import { createSlice } from "@reduxjs/toolkit";

const HotelSlice = createSlice({
  name: "hotel",
  initialState: {
    data: {}
  },
  reducers: {
    setHotel: (state, action) => {
      return { ...state, data: action.payload };
    },
    clearHotel: (state) => {
      return {};
    },
  },
});

export const { setHotel, clearHotel } = HotelSlice.actions;

export default HotelSlice.reducer;
