import React from "react";
import Card from "./Card";

export default function Cards({ cities }) {
  // acá va tu código
  // tip, podés usar un map
  return (
    <div>
      {cities.map((city, i) => (
        <Card
          max={city.max}
          min={city.min}
          name={city.name}
          img={city.weather[0].icon}
          onClose={() => alert(city.name)}
          key={i}
        />
      ))}
    </div>
  );
}
