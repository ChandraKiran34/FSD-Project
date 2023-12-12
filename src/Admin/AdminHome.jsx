import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import guides from "../AboutUs/Resources/travelguide.png";
import some from "../AboutUs/Resources/people.png";
import hotel from "../AboutUs/Resources/hotel.png";
import travels from "../AboutUs/Resources/travelling.png";
import AdminBookingList from "./AdminBookingList";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../FireBase/config";
function AdminHome() {
  const [userData1, setData1] = useState();

  useEffect(() => {
    const fetch = async () => {
      try {
        const q = query(collection(db, "users"), where("role", "==", "user"));

        const res = await getDocs(q);
        if (res.docs.length != 0) {
          const data = res.docs.map((doc, id) => ({
            ...doc.data(),
            id: doc.id,
          }));
          setData1(data);
        }
      } catch (error) {
        console.error(error);
      }
    };
    fetch();
  }, []);

  const [userData2, setData2] = useState();

  useEffect(() => {
    const fetch = async () => {
      try {
        const q = query(collection(db, "users"), where("role", "==", "guide"));

        const res = await getDocs(q);
        if (res.docs.length != 0) {
          const data = res.docs.map((doc, id) => ({
            ...doc.data(),
            id: doc.id,
          }));
          setData2(data);
        }
      } catch (error) {
        console.error(error);
      }
    };
    fetch();
  }, []);

  const [userData3, setData3] = useState();

  useEffect(() => {
    const fetch = async () => {
      try {
        const q = query(collection(db, "users"), where("role", "==", "agency"));

        const res = await getDocs(q);
        if (res.docs.length != 0) {
          const data = res.docs.map((doc, id) => ({
            ...doc.data(),
            id: doc.id,
          }));
          setData3(data);
        }
      } catch (error) {
        console.error(error);
      }
    };
    fetch();
  }, []);

  const [userData4, setData4] = useState();

  useEffect(() => {
    const fetch = async () => {
      try {
        const q = query(collection(db, "users"), where("role", "==", "hotel"));

        const res = await getDocs(q);
        if (res.docs.length != 0) {
          const data = res.docs.map((doc, id) => ({
            ...doc.data(),
            id: doc.id,
          }));
          setData4(data);
        }
      } catch (error) {
        console.error(error);
      }
    };
    fetch();
  }, []);






  

  return (
    <div className="p-4">
      <h1 className="font-bold text-3xl pb-3 mt-3 ">Welcome Admin,</h1>
      <h2 className="text-xl">Customer Analytics :</h2>
      <div className="flex mt-[1rem]">
        <Link to="/admindashboard/users">
          <div className="border flex items-center  p-1 justify-center flex-col gap-2 hover:shadow-lg">
            <img src={some} alt="people" className="w-[20%] " />
            <h1 className="font-bold"> Travellers </h1>
            <p>{userData1?.length}</p>
          </div>
        </Link>
        <Link to="/admindashboard/guides">
          <div className="border flex items-center justify-center flex-col gap-2 hover:shadow-lg">
            <img src={guides} alt="guides" className="w-[20%]" />
            <h1 className="font-bold"> Guides </h1>
            <p>{userData2?.length}</p>
          </div>
        </Link>
        <Link to="/admindashboard/hotels">
          <div className="border flex items-center justify-center flex-col gap-2 hover:shadow-lg">
            <img src={hotel} alt="hotels" className="w-[20%]" />
            <h1 className="font-bold"> Hotels </h1>
            <p>{userData4?.length}</p>
          </div>
        </Link>
        <Link to="/admindashboard/agencies">
          <div className="border flex items-center justify-center flex-col gap-2 hover:shadow-lg">
            <img src={travels} alt="travels" className="w-[20%]" />
            <h1 className="font-bold"> Travels </h1>
            <p>{userData3?.length}</p>
          </div>
        </Link>
      </div>
      <div className="pt-5">
        <AdminBookingList />
      </div>
    </div>
  );
}

export default AdminHome;
