import React from "react";
import "./App.css";
import Cards from "./components/Cards.jsx";
import SearchBar from "./components/SearchBar.jsx";
import data from "./data.js";

function App() {
  return (
    <div className="App">
      <div className="searchBar" >
        <SearchBar onSearch={(ciudad) => alert(ciudad)} />
      </div>
      <div className="Cards">
        <Cards cities={data} />
      </div>
    </div>
  );
}

export default App;
