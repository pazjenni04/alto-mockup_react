import React from "react";
import vehiclePhoto from "../../assets/images/Vehicle_photo.png";
import vehicleData from "./vehicle-info";
import "../styles/vehicle.css";

const Vehicle = () => {
  return (
    <main className="container">
      <img
        src={vehiclePhoto}
        alt="vehiclephoto"
        className="img-fluid mx-auto d-block vehiclephoto"
      />
      <h1 className="vehicle-title">Your Vehicle</h1>
      <div>{vehicleData}</div>
      <button className="vehicle-btn">IDENTIFY VEHICLE</button>
    </main>
  );
};

export default Vehicle;
