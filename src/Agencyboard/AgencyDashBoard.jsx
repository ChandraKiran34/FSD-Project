import React, {useState} from 'react'
import NavigationBar from './NavigationBar'
import { Routes, Route } from 'react-router-dom';
import AgencyHome from './AgencyHome';
import AgencyBooking from './AgencyBooking';
import AgencyUpdate from './AgencyUpdate';
function AgencyDashBoard() {
  const [expanded, setExpanded] = useState(true);
  return (
    <div className='flex'>
      <NavigationBar isExpanded={expanded} setIsExpanded={setExpanded} />
      <Routes>
        <Route path="/" element={<AgencyHome />} />
        <Route path="bookings" element={<AgencyBooking />} />
        <Route path="updateprofile" element={<AgencyUpdate />} />
        {/* Add more nested routes as needed */}
      </Routes>
    </div>
  )
}

export default AgencyDashBoard
