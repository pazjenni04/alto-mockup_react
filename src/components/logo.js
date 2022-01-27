import React from "react";
import logo from "../assets/images/Alto_logo.png";
import "./styles/logo.css";
import kabob from "../assets/images/Kabob_nav.png";

// header of the application
const Logo = () => {
  return (
    <header>
      <div className="top-nav">
        <img src={logo} alt="Altologo" className="logo" />
      </div>
      <div>
        <img src={kabob} alt="kabob" className="kabob" />
      </div>
    </header>
  );
};

export default Logo;
