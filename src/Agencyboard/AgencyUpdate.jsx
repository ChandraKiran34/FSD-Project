// HotelUpdate.js

import React, { useState } from 'react';
import { useSelector } from 'react-redux';
function HotelUpdate() {
  // Use state to manage form input values
  const [name, setName] = useState('Luxury Inn'); // Default name
  const [location, setLocation] = useState('Udaipur, Rajasthan'); // Default email
  const [phoneNumber, setPhoneNumber] = useState('9390464027'); // Default phone number
  const [num_vehicles, setVehicles] = useState('30')


  const userData = useSelector((state) => state.agency.data);
  const [agency, setAgency] = useState({
    name: userData?.name,
    mobile: userData?.mobile,
    vehicles: userData?.vehicles,
    location: userData.location,
  });
  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Here, you can add logic to update user information
    // For now, let's just log the values to the console
    console.log('Name:', name);
    console.log('Email:', location);
    console.log('Phone Number:', phoneNumber);
    console.log('No. of Rooms:', num_vehicles);
    // You can send this information to your backend or perform other update actions
  };

  return (
    <div className="bg-white p-6 rounded flex flex-col items-center mt-[7rem] ml-[13rem]">
      <h2 className="text-3xl font-semibold mb-6">Edit Profile</h2>
      {/* Form for updating user information */}
      <form onSubmit={handleSubmit}>
        <div className='flex gap-6'> 
          <div>
            {/* Name input */}
            <div className="w-96 ml-6 p-3 flex flex-col justify-between form-group">
              <label htmlFor="name" className="font-semibold">Name</label>
              <input
                className="border p-2 rounded-md"
                type="text"
                id="name"
                value={agency?.name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your name"
                required
              />
            </div>

            {/* Email input */}
            <div className="w-96 ml-6 p-3 flex flex-col justify-between form-group">
              <label htmlFor="location" className="font-semibold">Location</label>
              <input
                className="border p-2 rounded-md"
                type="text"
                id="location"
                value={agency?.location}
                onChange={(e) => setLocation(e.target.value)}
                placeholder="Enter your location"
                required
              />
            </div>
          </div>
          <div>
            <div className="w-96 ml-6 p-3 flex flex-col justify-between form-group">
              <label htmlFor="phoneNumber" className="font-semibold">Contact Number</label>
              <input
                className="border p-2 rounded-md"
                type="tel"  // Use type "tel" for phone numbers
                id="phoneNumber"
                value={agency?.mobile}
                onChange={(e) => setPhoneNumber(e.target.value)}
                placeholder="Enter your contact no."
                pattern="[0-9]{3}[0-9]{3}[0-9]{4}"  // Example pattern for XXX-XXX-XXXX format
                required
              />
            </div>
            {/* No of rooms input */}
            <div className="w-96 ml-6 p-3 flex flex-col justify-between form-group">
              <label htmlFor="vehicles" className="font-semibold">Vehicles</label>
              <input
                type="number"
                className="border p-2 rounded-md"
                id="vehicles"
                value={agency?.vehicles}
                onChange={(e) => setVehicles(e.target.value)}
                placeholder="Enter the number of vehicles"
                min="30"
                required
              />
            </div>
          </div>
        </div>
        {/* Submit button */}
        <div className="ml-[22rem] p-3">
          <button className="border p-3 rounded-md bg-[#4B6F44] text-white border-none hover:opacity-80 transition ease-in-out duration-700" type="submit">Update Profile</button>
        </div>
      </form>
    </div>
  );
}

export default HotelUpdate;
