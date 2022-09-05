import React from "react";
import Card from "./Card";
import "./Cards.css";

export default function Cards({ cities }) {
  // acá va tu código
  // tip, podés usar un map
  return (
    <div className="container">
      {cities.map((city, i) => (
        <Card
          max={city.main.temp_max}
          min={city.main.temp_min}
          name={city.name}
          img={city.weather[0].icon}
          onClose={() => alert(city.name)}
          key={i}
        />
      ))}
    </div>
  );
}
