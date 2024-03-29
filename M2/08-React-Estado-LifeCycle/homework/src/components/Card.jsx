import React from "react";
import "./Card.css";


export default function Card({ min, max, name, img, onClose, id }) {
  return (
    <div className="card">
      <div id="closeIcon" className="row">
        <button onClick={() => onClose} className="btn btn-sm btn-danger">
          X
        </button>
      </div>
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <div className="row">
          <div className="col-sm-4 col-md-4 col-lg-4">
            <p>Min</p>
            <p>{Math.round(min - 273)}°</p>
          </div>
          <div className="col-sm-4 col-md-4 col-lg-4">
            <p>Max</p>
            <p>{Math.ceil(max - 273)}°</p>
          </div>
          <div className="col-sm-4 col-md-4 col-lg-4">
            <img
              className="iconoClima"
              src={"http://openweathermap.org/img/wn/" + img + "@2x.png"}
              width="80"
              height="80"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}
