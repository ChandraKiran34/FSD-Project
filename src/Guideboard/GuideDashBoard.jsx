import React, {useState} from 'react'
import NavigationBar from './NavigationBar'
import { Routes, Route } from 'react-router-dom';
import GuideHome from './GuideHome';
import GuideBooking from './GuideBooking';
import GuideUpdate from './GuideUpdate';
function GuideDashBoard() {
  const [expanded, setExpanded] = useState(true);
  return (
    <div className='flex'>
      <NavigationBar isExpanded={expanded} setIsExpanded={setExpanded} />
      <Routes>
        <Route path="/" element={<GuideHome />} />
        <Route path="bookings" element={<GuideBooking />} />
        <Route path="updateprofile" element={<GuideUpdate />} />
        {/* Add more nested routes as needed */}
      </Routes>
    </div>
  )
}

export default GuideDashBoard
