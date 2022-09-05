import React from "react";
import Logo from "../logoHenry.png";
import "./Nav.css";
import SearchBar from "./SearchBar";

function Nav({ onSearch }) {
  return (
    <div>
      <span className="logoHenry">{Logo}</span>
      <div className="navBar">
        <SearchBar onSearch={onSearch} />
      </div>
    </div>
  );
}

export default Nav;
