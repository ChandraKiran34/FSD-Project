import React from "react";
import { FaHotel } from "react-icons/fa";
import { FaMapLocationDot, FaCarRear } from "react-icons/fa6";
import "../CSS/Join.css";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const Join = () => {
  return (
    <>
      <Navbar />
      <div className="join-image">
        <div className="page-container">
          <div className="box">
            <FaMapLocationDot size={60} className="join-icon" />
            <h3>Tourist Guide</h3>
            <p>If You known a place completely.Come and join with us.</p>
            <button>Login</button>
          </div>
          <div className="box">
            <FaHotel size={60} className="join-icon" />
            <h3>Register as hotel</h3>
            <p>
              Do you have a Hotel? if your naswer is yes,register your hotel
            </p>
            <button>Login</button>
          </div>

          <div className="box">
            <FaCarRear size={60} className="join-icon" />
            <h3>Travel Agency</h3>
            <p>Register your travel agency in our website</p>
            <button>Login</button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Join;
