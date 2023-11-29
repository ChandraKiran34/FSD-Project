import React from "react";
import { FaMapLocationDot } from "react-icons/fa6";
import { LuHotel } from "react-icons/lu";
import { MdOutlinePriceChange } from "react-icons/md";
import "../CSS/Services.css";
import vacation from "../Assets/vacation.jpg";
function Services() {
  return (
    <div
      className="container"

      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${vacation})`,
        color: "#fff",
        backgroundSize: "1500px 700px",
        padding: "20px 0",
        width: "1500px",
        height: "650px",
        overflowY:"hidden"
      }}
    >
      <div style={{marginTop:"245px"}}>
        <div className="title-wrap">
          <span >Why Choose Us?</span>
          <h2>We Provide</h2>
        </div>

        <div className="services-row">
          <div className="services-item">
            <span>
            <FaMapLocationDot />
            </span>
            <h3>Travel Guide</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem
              quo, totam repellat velit, dignissimos sequi error a minima
              architecto fugit nisi dolorum repellendus?
            </p>
          </div>

          <div className="services-item">
            <span>
              <LuHotel />
            </span>
            <h3>Luxurious Hotel</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem
              quo, totam repellat velit, dignissimos sequi error a minima
              architecto fugit nisi dolorum repellendus?
            </p>
          </div>

          <div className="services-item">
            <span>
              <MdOutlinePriceChange />
            </span>
            <h3>Reasonable Price</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem
              quo, totam repellat velit, dignissimos sequi error a minima
              architecto fugit nisi dolorum repellendus?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
