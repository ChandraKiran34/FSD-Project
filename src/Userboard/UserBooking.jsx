// UserBookings.js
import React, { useEffect, useState } from "react";
import Hampi from '../Assets/Hampi.jpg'
import { useSelector } from "react-redux";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../FireBase/config";

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
  const userData = useSelector((state) => state.user.data);
  const email =  userData?.email


  const [userBooking, setUserBooking] = useState();

  useEffect(() => {
    const fetch = async () => {
      try {
        const q = query(collection(db, "bookings"), where("user.email", "==", `${email}`));

        const res = await getDocs(q);
        if (res.docs.length != 0) {
          const data = res.docs.map((doc, id) => ({
            ...doc.data(),
            id: doc.id,
          }));
          setUserBooking(data);
        }
      } catch (error) {
        console.error(error);
      }
    };
    fetch();
  }, []);
  return (
    <div className="bg-white p-6 rounded">
      <h2 className="text-3xl font-semibold mb-6">Your Bookings</h2>

      {userBooking?.map((booking) => (
        <div
          key={booking.timestamp}
          className="flex items-center bg-gradient-to-r from-blue-200 to-blue-300 p-6 rounded-md shadow-md mb-6"
        >
          <div className="w-1/4">
            {/* Place Image */}
            <img
              src={Hampi}
              alt={booking?.location}
              className="w-full h-auto rounded-md"
            />
          </div>
          <div className="w-3/4 ml-6">
            <h3 className="text-xl font-bold mb-3">{booking?.location}</h3>
            <p className="text-gray-600">
              <span className="font-semibold">Guide:</span> {booking?.guide}
            </p>
            <p className="text-gray-600">
              <span className="font-semibold">Hotel:</span> {booking?.hotel}
            </p>
            <p className="text-gray-600">
              <span className="font-semibold">No of Persons:</span>{" "}
              {booking?.numberOfPersons}
            </p>
            <p className="text-gray-600">
              <span className="font-semibold">Agency:</span> {booking.agency}
            </p>
            <p className="text-gray-600">
              <span className="font-semibold">TotalPrice</span> {booking?.totalPrice}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default UserBooking;