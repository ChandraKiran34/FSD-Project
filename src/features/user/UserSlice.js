// features/user/userSlice.js
import { createSlice } from "@reduxjs/toolkit";

const UserSlice = createSlice({
  name: "user",
  initialState: {
    data: {}
  },
  reducers: {
    setUser: (state, action) => {
      return { ...state, data: action.payload };
    },
    clearUser: (state) => {
      return {};
    },
  },
});

export const { setUser, clearUser } = UserSlice.actions;

export default UserSlice.reducer;
