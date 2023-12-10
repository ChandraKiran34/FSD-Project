import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
const FakePaymentForm = () => {
  const [bookingData, setBookingData] = useState({
    hotel: "",
    guide: "",
    agency: "",
    numberOfPersons: 1,
  });
  const nav = useNavigate()
  const [paymentStatus, setPaymentStatus] = useState('pending')
  const [paymentData, setPaymentData] = useState({
    cardNumber: "",
    password: "",
  });

  const handleBookingChange = (field, value) => {
    setBookingData((prevData) => ({ ...prevData, [field]: value }));
  };

  const handlePaymentChange = (field, value) => {
    setPaymentData((prevData) => ({ ...prevData, [field]: value }));
  };

  const calculateTotalAmount = () => {
    const baseAmount = 5000;
    const totalAmount = baseAmount * bookingData.numberOfPersons;
    return totalAmount;
  };

  const handleHomeClick = () =>(
    nav('/')
  )
  const handleDashboardClick = () =>(
    nav('/userdashboard')
  )

  const handleProceed = () => {
    // Add your logic to handle the payment and navigate to the user dashboard
    console.log("Processing payment...");
    setPaymentStatus('success');
    if(paymentStatus === 'success ')
    {
      nav('/payment/tourdetails')
    }
    
    // For demonstration purposes, you can replace the following line with your navigation logic.
    alert("Payment successful! Redirecting to user dashboard.");
    
  };

  return (
    <div className="max-w-[50vw] mx-auto p-8 pl-[5rem] pr-[5rem] mt-[4rem] bg-[#4ea7fb] shadow-inner rounded-md">
      <h1 className="">Payment form</h1>
      <div className="mb-4">
        <label className="block text-sm font-medium text-[#141a15]">
          Choose Your Hotel
        </label>
        <select
          className="mt-1 p-2 border rounded-md w-full"
          onChange={(e) => handleBookingChange("hotel", e.target.value)}
        >
          <option value="">Select Hotel</option>
          {/* Add more hotel options */}
        </select>
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-[#141a15]">
          Choose Your Guide
        </label>
        <select
          className="mt-1 p-2 border rounded-md w-full"
          onChange={(e) => handleBookingChange("guide", e.target.value)}
        >
          <option value="">Select Guide</option>
          {/* Add more guide options */}
        </select>
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-[#141a15]">
          Choose Your Travel Agency
        </label>
        <select
          className="mt-1 p-2 border rounded-md w-full"
          onChange={(e) => handleBookingChange("agency", e.target.value)}
        >
          <option value="">Select Travel Agency</option>
          {/* Add more agency options */}
        </select>
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-[#141a15]">
          Number of Persons
        </label>
        <input
          type="number"
          min="1"
          max="4"
          value={bookingData.numberOfPersons}
          onChange={(e) =>
            handleBookingChange("numberOfPersons", e.target.value)
          }
          className="mt-1 p-2 border rounded-md w-full"
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-[#141a15]">
          Total Amount
        </label>
        <p className="mt-1 font-semibold">{calculateTotalAmount()} INR</p>
      </div>

      <hr className="my-4 border-t" />

      <div className="mb-4">
        <label className="block text-sm font-medium text-[#141a15]">
          Card Number
        </label>
        <input
          type="text"
          maxLength="12"
          value={paymentData.cardNumber}
          onChange={(e) => handlePaymentChange("cardNumber", e.target.value)}
          className="mt-1 p-2 border rounded-md w-full"
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-[#141a15]">
          Password
        </label>
        <input
          type="password"
          value={paymentData.password}
          onChange={(e) => handlePaymentChange("password", e.target.value)}
          className="mt-1 p-2 border rounded-md w-full"
        />
      </div>

      <div>
        <button
          className="px-4 py-2 ml-[3rem] bg-green-500 text-white rounded-md hover:bg-green-600"
          onClick={handleProceed}
        >
          Proceed to Payment
        </button>
      </div>
    </div>
  );
};

export default FakePaymentForm;
