// store.js
import { configureStore } from '@reduxjs/toolkit';
import userReducer from './features/user/UserSlice';
import guideReducer from './features/guide/GuideSlice'
import hotelReducer from './features/hotel/HotelSlice'
import agencyReducer from './features/agency/AgencySlice'
const store = configureStore({
  reducer: {
    user: userReducer,
    guide:guideReducer,
    hotel:hotelReducer,
    agency:agencyReducer
  },
});

export default store;
