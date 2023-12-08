import React, { useState, useEffect } from "react";
import {Link} from 'react-router-dom'
import axios from "axios";
import "../CSS/PlanTour.css";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { MdLocationOn } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
const PlanTour = () => {
  const [productData, setProductData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("./places.json");
        const placesArray = response.data.places;

        if (Array.isArray(placesArray)) {
          setProductData(placesArray);
        } else {
          console.error("Data is not an array:", placesArray);
        }
      } catch (error) {
        alert("error fetching data")
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const filteredProducts =
    productData &&
    productData.filter((product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

  return (
    <>
      <Navbar />
      <section id="featured">
        <div class="container">
          <div class="title-wrap">
            <span class="sm-title">
              know about some places before your travel
            </span>
            <h2 className="font-semibold text-xl mt-1">Choose your Travel location:</h2>
          </div>
          <input
            className="border  p-5 w-[60vh] ml-[23.5rem] mb-7 border-black rounded"
            type="text"
            placeholder="Search by place name"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <div className="featured-row">
            {filteredProducts.map((place) => (
              <div key={place.id} className="card-hover w-[10vh] p-5">
                {/* Add your content for each place here */}
                <Link to={`/place/${place.id}/${encodeURIComponent(place.name)}`}>
                <FaHeart className="absolute ml-[21rem] mt-[10px] text-[#fc5252]"/>
                <img className="image ml-5 rounded object-fill h-98 w-96" src={place.image} alt={place.name}  />
                <p className="ml-5 mt-5 font-bold flex"><MdLocationOn className="mt-1"/> {place.name}</p>
                <p className="ml-5 mt-5 text-justify">{place.desc}</p>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default PlanTour;
