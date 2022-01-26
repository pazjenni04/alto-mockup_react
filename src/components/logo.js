import React from "react";
import logo from "../assets/images/Alto_logo.png";
import "./styles/logo.css";

const Logo = () => {
  return (
    <header>
      <img src={logo} alt="Altologo" className="logo" />
    </header>
  );
};

export default Logo;
