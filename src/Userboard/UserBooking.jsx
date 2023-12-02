// UserBookings.js

import React from "react";
import Hampi from '../Assets/Hampi.jpg'
const bookings = [
  {
    id: 1,
    place: "Hampi",
    guide: "John Doe",
    hotel: "Luxury Inn",
    startDate: "2023-12-15",
    agency: "Travel Explorers",
    duration: "7 days",
    image:Hampi // Add the actual image path
  },
  // Add more booking entries as needed
];

function UserBooking() {
  return (
    <div className="bg-white p-6 rounded">
      <h2 className="text-3xl font-semibold mb-6">Your Bookings</h2>

      {bookings.map((booking) => (
        <div
          key={booking.id}
          className="flex items-center bg-gradient-to-r from-blue-200 to-blue-300 p-6 rounded-md shadow-md mb-6"
        >
          <div className="w-1/4">
            {/* Place Image */}
            <img
              src={booking.image}
              alt={booking.place}
              className="w-full h-auto rounded-md"
            />
          </div>
          <div className="w-3/4 ml-6">
            <h3 className="text-xl font-bold mb-3">{booking.place}</h3>
            <p className="text-gray-600">
              <span className="font-semibold">Guide:</span> {booking.guide}
            </p>
            <p className="text-gray-600">
              <span className="font-semibold">Hotel:</span> {booking.hotel}
            </p>
            <p className="text-gray-600">
              <span className="font-semibold">Start Date:</span>{" "}
              {booking.startDate}
            </p>
            <p className="text-gray-600">
              <span className="font-semibold">Agency:</span> {booking.agency}
            </p>
            <p className="text-gray-600">
              <span className="font-semibold">Duration:</span> {booking.duration}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default UserBooking;