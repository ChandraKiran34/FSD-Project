import React,{ useEffect, useState } from "react";
import { MdEmail } from "react-icons/md";
import { FaPhone, FaUser } from "react-icons/fa6";
import { CiLocationOn } from "react-icons/ci";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../FireBase/config";
import { FaLocationArrow } from "react-icons/fa";
const AdminGuide = () => {
  const [userData, setData] = useState();

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
          setData(data);
        }
      } catch (error) {
        console.error(error);
      }
    };
    fetch();
  }, []);
  // const userData = [
  //   {
  //     name: "sai teja",
  //     mobileNumber: "9494339652",
  //     email: "saiteja.p21@iiits.in",
  //     location: "New Delhi",
  //     knownLang: ["Languages 1", "Languages 2"],
  //   },
  //   {
  //     name: "Apparao",
  //     mobileNumber: "9494339654",
  //     email: "apparao.s21@iiits.in",
  //     location: "Tirupathi",
  //     knownLang: ["Languages 1", "Languages 2"],
  //   },
  //   {
  //     name: "chandra",
  //     mobileNumber: "9494336895",
  //     email: "chandra.b21@iiits.in",
  //     location: "Banguluru",
  //     knownLang: ["Languages 1", "Languages 2"],
  //   },
  //   {
  //     name: "satwik",
  //     mobileNumber: "9110364244",
  //     email: "satwik.p21@iiits.in",
  //     location: "Chennai",
  //     knownLang: ["Languages 1", "Languages 2"],
  //   },
  // ];

  return (
    <div className="bg-white p-6  ml-7">
      <h1 className="font-bold text-4xl p-5">Registered Guides</h1>
      <ul className="flex">
        {userData?.map((data, index) => (
          <div className="border border-r-2 w-[20vw] p-4" key={index}>
            <h2 className="text-xl  mb-4 flex">
              <FaUser className="mr-2 font-[400]" />
              <h1 className="font-semibold">{data.name}</h1>
            </h2>
            <p className="text-gray-600 mb-2 flex">
              <FaPhone className="mt-1" />
              <p className="pl-1">Mobile: {data.mobile}</p>
            </p>
            <p className="text-gray-600 mb-2 flex">
              <FaLocationArrow className="mt-1" />
              <p className="pl-1">location: {data.location}</p>
            </p>
            <p className="text-gray-600 mb-2 flex">
              <MdEmail className="mt-1" />
              <p className="pl-1">Email: {data.email}</p>
            </p>
            {/* <div>
              <p className="text-gray-600 font-semibold mb-2 ">
                Languages Known:
              </p>
              <ul className=" pl-6">
                {data.knownLang.map((language, index) => (
                  <li key={index} className="flex">
                    <CiLocationOn className="mt-1 font-[600]" />
                    <li className="ml-2">{language}</li>
                  </li>
                ))}
              </ul>
            </div> */}
            <div className="flex justify-center items-center">
              <button className="p-2 border rounded mt-[2rem] bg-[#f85451] text-white font-semibold">View Bookings</button>
              <button className="p-2 border rounded mt-[2rem] bg-[#f85451] text-white font-semibold">Remove</button>
            </div>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default AdminGuide;
