import React, { useEffect, useState } from "react";
import "../CSS/Home.css";
// import bg from "../Assets/bg-pic.png";
import places from "./Places";
import PlaceCard from "./PlaceCard";
// import logo from "../Assets/logo.jpg";
import Services from "../Components/Services";
import Footer from "../Components/Footer";
function Home() {
  
  

  return (
    <div>
      <div className='home-page'>
        <div className="background-image">
          <div className="center-content">
            <h1>Pack Your Bags</h1>
            <p>Didn't you pack your bags yet?</p>
            <button className="explore-btn">Explore</button>
          </div>
        </div>

        <div style={{marginTop:"75px"}}>
          <h3 style={{color:"#aaa",fontWeight:"200",marginBottom:"50px"}}>KNOW ABOUT SOME PLACES BEFORE YOU TRAVEL</h3>
          <h2 style={{ color: "black" }}>FEATURED PLACES</h2>
        </div>

        <section className="places">
          {places.map((place, index) => (
            <PlaceCard
              image={place.image}
              title={place.title}
              spots={place.spots}
              state={place.state}
              key={place.id}
            />
          ))}
        </section>

        <Services />

        <Footer />
      </div>
    </div>
  );
}

export default Home;
