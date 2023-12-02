import React from 'react'
import NavigationBar from './NavigationBar'
import { Routes, Route } from 'react-router-dom';
import UserHome from './UserHome';
import UserBooking from './UserBooking';
import UserUpdate from './UserUpdate';
import UserWish from './UserWish';
function UserDashBoard() {
  return (
    <div className='flex'>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<UserHome />} />
        <Route path="bookings" element={<UserBooking />} />
        <Route path="updateprofile" element={<UserUpdate />} />
        <Route path="wishlist" element={<UserWish />} />
        {/* Add more nested routes as needed */}
      </Routes>
    </div>
  )
}

export default UserDashBoard
