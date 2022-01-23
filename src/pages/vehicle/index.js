import React from "react";
import vehiclePhoto from "../../assets/images/Vehicle_photo.png";
import vehicleData from "./vehicle-info";

const Vehicle = () => {
  return (
    <main>
      <img src={vehiclePhoto} alt="vehiclephoto" />
      <h2>YOUR VEHICLE</h2>
      <div>{vehicleData}</div>
      <button>IDENTIFY VEHICLE</button>
    </main>
  );
};

export default Vehicle;
