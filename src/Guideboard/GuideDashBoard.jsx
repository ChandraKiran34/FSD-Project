import React from 'react'
import NavigationBar from './NavigationBar'
import { Routes, Route } from 'react-router-dom';
import UserHome from './GuideHome';
import UserBooking from './GuideBooking';
import UserUpdate from './GuideUpdate';
function UserDashBoard() {
  return (
    <div className='flex'>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<UserHome />} />
        <Route path="bookings" element={<UserBooking />} />
        <Route path="updateprofile" element={<UserUpdate />} />
        {/* Add more nested routes as needed */}
      </Routes>
    </div>
  )
}

export default UserDashBoard
