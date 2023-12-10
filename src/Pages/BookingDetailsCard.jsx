// BookingDetailsCard.jsx

import React,{useState} from 'react';
import { FaCar, FaHotel } from 'react-icons/fa6';
import { RiGuideFill } from "react-icons/ri";
import { Link } from 'react-router-dom';
const BookingDetailsCard = () => {
    const [bookingDetails, setBookingDetails] = useState({
        hotel: {
          name: "Hotel ABC",
          image: "/photoset2/Konark.jpg",
          description: "Hotel description",
        },
        guide: { name: "Guide XYZ" /* other guide details */ },
        travelAgency: {
          name: "Travel Agency 123" /* other travel agency details */,
        },
        totalPrice: 5000, // Assuming a fixed price for now
      });
  return (
    <div className="max-w-md mx-auto bg-[#fff] rounded-xl overflow-hidden shadow-lg p-6 mb-6">
      {/* Hotel Section */}
      <div className="mb-4">
        <h2 className="text-xl font-semibold mb-2">Tour Details</h2>
        <img src={bookingDetails.hotel.image} alt={bookingDetails.hotel.name} className="w-full h-88 object-cover mb-2" />
        <p className="text-gray-700 font-semibold">konark,Orissa</p>
      </div>

      <div className="mb-4">
        <h2 className="text-xl text-[#52aaea] font-[400] mb-2 flex gap-2 underline"><FaHotel />Hotel Details</h2>
        <p>Chandra Kiran group of hotels</p>
        {/* Add guide details here */}
      </div>

      {/* Guide Section */}
      <div className="mb-4">
        <h2 className="text-xl text-[#52aaea] font-[400] mb-2 flex gap-1 underline"><RiGuideFill />Guide Details</h2>
        <p>Sonish</p>
        {/* Add guide details here */}
      </div>

      {/* Travel Agency Section */}
      <div className="mb-4">
        <h2 className="text-xl text-[#52aaea] font-[400] mb-2 flex gap-2 underline"><FaCar />Travel Agency Details</h2>
        <p>Rahul travel Agency</p>
        {/* Add travel agency details here */}
      </div>

      {/* Total Price Section */}
      <div>
        <h2 className="text-xl font-[500] mb-2">Total Price</h2>
        <p className="text-green-500 text-xl font-semibold">{`₹${bookingDetails.totalPrice}`}</p>
      </div>

      {/* Buttons Section */}
      <div className="flex justify-between mt-4">
        <Link to='/' className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline-blue">
          Go to Home
        </Link>
        <Link to='/userdashboard' className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline-green">
          Go to Dashboard
        </Link>
      </div>
    </div>
  );
};

export default BookingDetailsCard;
