import React from 'react'
import NavigationBar from './NavigationBar'
import { Routes, Route } from 'react-router-dom';
import HotelHome from './HotelHome';
import HotelBooking from './HotelBooking';
import HotelUpdate from './HotelUpdate';
function HotelDashBoard() {
  return (
    <div className='flex'>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<HotelHome />} />
        <Route path="bookings" element={<HotelBooking />} />
        <Route path="updateprofile" element={<HotelUpdate />} />
        {/* Add more nested routes as needed */}
      </Routes>
    </div>
  )
}

export default HotelDashBoard
