import React from 'react';

export default function Card({ max, min, name, img, onClose }) {
  // acá va tu código
  return (
    <div>
      <button onClick={onClose} >X</button>
      <h2>{name}</h2>
      <div>
        <p>Min</p>
        <p>{min}</p>
      </div>
      <div>
        <p>Max</p>
        <p>{max}</p>
      </div>
      <div>
        <img src={`http://openweathermap.org/img/wn/${img}@2x.png`} alt="logo tiempo" />
      </div>
    </div>)
};
