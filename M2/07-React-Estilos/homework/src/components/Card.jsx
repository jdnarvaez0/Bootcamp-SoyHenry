import React from "react";
import "./Card.css";

export default function Card({ max, min, name, img, onClose }) {
  // acá va tu código
  return (
    <div className="card hydrogen-card">
      <div className="cardButton">
        <button onClick={onClose}>X</button>
      </div>
      <div className="cardBody">
        <h2 className="cardTitle">{name}</h2>
        <div className="cardBodyItems">
          <h6>Min</h6>
          <p>{Math.round(min - 273)}°</p>
        </div>
        <div className="cardBodyItems">
          <h6>Max</h6>
          <p>{Math.ceil(max - 273)}°</p>
        </div>
      </div>

      <div className="cardImage">
        <img
          src={`http://openweathermap.org/img/wn/${img}@2x.png`}
          alt="logo tiempo"
        />
      </div>
    </div>
  );
}
