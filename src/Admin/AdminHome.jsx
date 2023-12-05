import React from "react";
import guides from "../AboutUs/Resources/travelguide.png";
import some from "../AboutUs/Resources/people.png";
import hotel from "../AboutUs/Resources/hotel.png";
import travels from "../AboutUs/Resources/travelling.png";
import AdminBookingList from "./AdminBookingList";
function AdminHome() {
  return (
    <div className="p-4">
      <h1 className="font-bold text-3xl pb-3 mt-3 ">Welcome Admin,</h1>
      <h2 className="text-xl">Customer Analytics :</h2>
      <div className="flex mt-[1rem]">
        <div className="border flex items-center  p-1 justify-center flex-col gap-2 hover:shadow-lg">
          <img src={some} alt="people" className="w-[20%] " />
          <h1 className="font-bold"> Users </h1>
          <p>7</p>
        </div>
        <div className="border flex items-center justify-center flex-col gap-2 hover:shadow-lg">
          <img src={guides} alt="guides" className="w-[20%]" />
          <h1 className="font-bold"> Guides </h1>
          <p>12</p>
        </div>
        <div className="border flex items-center justify-center flex-col gap-2 hover:shadow-lg">
          <img src={hotel} alt="hotels" className="w-[20%]" />
          <h1 className="font-bold"> Users </h1>
          <p>12</p>
        </div>
        <div className="border flex items-center justify-center flex-col gap-2 hover:shadow-lg">
          <img src={travels} alt="travels" className="w-[20%]" />
          <h1 className="font-bold"> Travels </h1>
          <p>12</p>
        </div>
      </div>
      <div className="pt-5">
      <AdminBookingList  />
      </div>
    </div>
  );
}

export default AdminHome;
