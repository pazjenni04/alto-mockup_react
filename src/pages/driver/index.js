import React from "react";
import driverPhoto from "../../assets/images/Driver_photo.png";
import driverData from "./driver-info";
import "../../styles/driver.css";

const Driver = () => {
  return (
    <main className="container">
      <div className="flex-row justify-centerr">
        <img src={driverPhoto} alt="Driver" className="col" />
        <h2 className="col">YOUR DRIVER</h2>
        <div className="col">{driverData}</div>
        <button className="driver-btn">CONTACT DRIVER</button>
      </div>
    </main>
  );
};

export default Driver;
