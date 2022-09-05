import React, { useState } from "react";
import {Route, HashRouter as Router} from 'react-router-dom'
import "./App.css";

import Nav from "./components/Nav";
import Cards from "./components/Cards";

export default function App() {
  let apiKey = "10379c91bfe048f2178785c9a844bd3f";
  const [cities, setCities] = useState([]);



  function onSearch(ciudad) {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${apiKey}`
    )
      .then((r) => r.json())
      .then((recurso) => {
        if (recurso.main !== undefined) {
          const ciudad = {
            min: Math.round(recurso.main.temp_min),
            max: Math.round(recurso.main.temp_max),
            img: recurso.weather[0].icon,
            id: recurso.id,
            wind: recurso.wind.speed,
            temp: recurso.main.temp,
            name: recurso.name,
            weather: recurso.weather[0].main,
            clouds: recurso.clouds.all,
            latitud: recurso.coord.lat,
            longitud: recurso.coord.lon,
          };
          setCities((oldCities) => [...oldCities, ciudad]);
        } else {
          alert("Ciudad no encontrada");
        }
      });
  }
  return (
    <div className="App">
      <Route path="/" render={() => <Nav onSearch={onSearch} />} />
      <div>
        <Route path="/about" component={About} />
      </div>
      <hr />
      <div>
        <Route path="/ciudades" render={() => <Cards  cities={cities} onClose={onClose} />}/>
        <Route
            exact
            path='/ciudad/:ciudadId'
            render={({match}) => <Ciudad
                  city={cities.filter(c => c.id === parseInt(match.params.ciudadId))}
                />}
        />
      </div>
    </div>
  );
}
