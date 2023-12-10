// HotelUpdate.js

import React, { useState } from "react";
import { useSelector } from "react-redux";

function HotelUpdate() {
  // Use state to manage form input values
  const [name, setName] = useState("Luxury Inn"); // Default name
  const [phoneNumber, setPhoneNumber] = useState("9390464027"); // Default phone number
  const [num_rooms, setRooms] = useState("136");

  const userData = useSelector((state) => state.hotel.data);
  const [hotel, setHotel] = useState({
    name: userData?.name,
    mobile: userData?.mobile,
    rooms: userData?.rooms,
    location: userData.location,
  });

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Here, you can add logic to update user information
    // For now, let's just log the values to the console
    console.log("Name:", name);
    console.log("Phone Number:", phoneNumber);
    console.log("No. of Rooms:", num_rooms);
    // You can send this information to your backend or perform other update actions
  };

  return (
    <div className="bg-white p-6 rounded flex flex-col items-center mt-[7rem] ml-[13rem]">
      <h2 className="text-3xl font-semibold mb-6">Edit Profile</h2>
      {/* Form for updating user information */}
      <form onSubmit={handleSubmit}>
        <div className="flex gap-6">
          <div>
            {/* Name input */}
            <div className="w-96 ml-6 p-3 flex flex-col justify-between form-group">
              <label htmlFor="name" className="font-semibold">
                Name
              </label>
              <input
                className="border p-2 rounded-md"
                type="text"
                id="name"
                value={hotel.name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your name"
                required
              />
            </div>
            <div className="w-96 ml-6 p-3 flex flex-col justify-between form-group">
              <label htmlFor="num_rooms" className="font-semibold">
                Total Rooms
              </label>
              <input
                type="number"
                className="border p-2 rounded-md"
                id="num_rooms"
                value={hotel.rooms}
                onChange={(e) => setRooms(e.target.value)}
                placeholder="Enter the number of rooms"
                min="84"
                required
              />
            </div>
          </div>
          <div>
            <div className="w-96 ml-6 p-3 flex flex-col justify-between form-group">
              <label htmlFor="phoneNumber" className="font-semibold">
                Contact Number
              </label>
              <input
                className="border p-2 rounded-md"
                type="tel" // Use type "tel" for phone numbers
                id="phoneNumber"
                value={hotel.mobile}
                onChange={(e) => setPhoneNumber(e.target.value)}
                placeholder="Enter your contact no."
                pattern="[0-9]{3}[0-9]{3}[0-9]{4}" // Example pattern for XXX-XXX-XXXX format
                required
              />
            </div>
            <div className="w-96 ml-6 p-3 flex flex-col justify-between form-group">
              <label htmlFor="num_rooms" className="font-semibold">
                Location
              </label>
              <input
                type="text"
                className="border p-2 rounded-md"
                id="location"
                value={hotel.location}
                onChange={(e) => setRooms(e.target.value)}
                placeholder="Enter the number of rooms"
                required
              />
            </div>
          </div>
        </div>
        {/* Submit button */}
        <div className="ml-[22rem] p-3">
          <button
            className="border p-3 rounded-md bg-[#4B6F44] text-white border-none hover:opacity-80 transition ease-in-out duration-700"
            type="submit"
          >
            Update Profile
          </button>
        </div>
      </form>
    </div>
  );
}

export default HotelUpdate;
