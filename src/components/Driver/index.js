import React from "react";
import { useRef } from "react";
import driverPhoto from "../../assets/images/Driver_photo.png";
import driverData from "./driver-info";
import "../styles/driver.css";
import "../styles/font.css";

// renders driver section of application - driver photo, title and imports data (driver name and bio)
const Driver = () => {
  return (
    <main className="container justify-content-center">
      <img src={driverPhoto} alt="Driver" className="rounded driver-pic" />
      <h1 className="driver-title">Your Driver</h1>
      <div className="driver-info">{driverData}</div>
      <button className="driver-btn">Contact Driver</button>
    </main>
  );
};

export default Driver;
