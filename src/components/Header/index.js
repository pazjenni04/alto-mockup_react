import React from "react";
import logo from "../../assets/images/Alto_logo.png";
import "../styles/header.css";

const Header = () => {
  return (
    <header>
      <img src={logo} alt="Altologo" className="logo" />
    </header>
  );
};

export default Header;
