import React from "react";
import { BsStarFill } from "react-icons/bs";
import '../CSS/PlaceCard.css';

const PlaceCard = ({ title, image, spots,state }) => {
  return (
    <div className="place-card" >
      <div className="place-image">
        <img src={image} alt={title} />
      </div>
      <div className="place-details">
        <h3 className="place-title">{title},{state}</h3>
        <p className="place-spots"><strong> Tourist Spots:</strong> {spots}</p>
      </div>
    </div>
  );
};

export default PlaceCard;
