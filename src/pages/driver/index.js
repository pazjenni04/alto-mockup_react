import React from "react";
import driverPhoto from "../../assets/images/Driver_photo.png";
import driverData from "./driver-info";

const Driver = () => {
  return (
    <main>
      <img src={driverPhoto} alt="Driver" />
      <h2>YOUR DRIVER</h2>
      <div>{driverData}</div>
      <button>CONTACT DRIVER</button>
    </main>
  );
};

export default Driver;
