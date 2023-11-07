import React from "react";
import "../CSS/Home.css";
import bg from "../Assets/bg-pic.png";
import places from "./Places";
import PlaceCard from "./PlaceCard";
import logo from '../Assets/logo.jpg'
function Home() {
  return (
    <div className="home-page">
      <div className="content">
        <div className="text-content">
        <div style={{display:"flex"}}>
        <span><img src={logo} alt="" width="125px" height="140px" style={{borderRadius:"65px",marginRight:"15px"}}/></span>
          <h1 style={{ fontSize: "4rem" }}>Pack your Bags</h1>
        </div>
          <p style={{ fontWeight: "bold" }}>Didn't you pack yet ?</p>
          <button className="cta-button">Explore</button>
        </div>
        <div
          className="image-content"
          style={{ backgroundImage: `url(${bg})` }}
        >
          <div className="image-mask"></div>
        </div>
      </div>

      <section className="places">
        {places.map((place, index) => (
          <div key={index} className="place-card" style={{display:"flex"}} >
           <PlaceCard image={place.image} title={place.title} spots={place.spots}/>
          </div>
        ))}
      </section>

      <section className="call-to-action">
        <h2>Ready to Get Started?</h2>
        <button className="cta-button">Sign Up Now</button>
      </section>
    </div>
  );
}

export default Home;
