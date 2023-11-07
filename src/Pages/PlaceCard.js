import React from "react";
import { BsStarFill } from "react-icons/bs";
import '../CSS/PlaceCard.css';

const PlaceCard = ({ title, image, spots }) => {
  return (
    <div className="place-card" >
      <div className="place-image">
        <img src={image} alt={title} width="300px" height="250" />
      </div>
      <div className="place-details">
        <h3 className="place-title">{title}</h3>
        <div className="place-rating">
          <BsStarFill />
          <span className="rating-value">4.5</span>
        </div>
        <p className="place-spots">Available Spots: {spots}</p>
      </div>
    </div>
  );
};

export default PlaceCard;
