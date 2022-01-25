import React from "react";
import driverPhoto from "../../assets/images/Driver_photo.png";
import driverData from "./driver-info";
import "../styles/driver.css";
import "../styles/font.css";

const Driver = () => {
  return (
    <main className="container">
      <img
        src={driverPhoto}
        alt="Driver"
        className="img-fluid rounded mx-auto d-block driver-pic"
      />
      <h1 className="driver-title">Your Driver</h1>
      <div className="driver-info">{driverData}</div>
      <button className="driver-btn">Contact Driver</button>
    </main>
  );
};

export default Driver;
