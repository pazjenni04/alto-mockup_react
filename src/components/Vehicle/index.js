import React from "react";
import vehiclePhoto from "../../assets/images/Vehicle_photo.png";
import vehicleData from "./vehicle-info";
import "../styles/vehicle.css";

// renders the vehicle section of the application - imports the photo of the vehicle, make/model of vehicle, vehicle license, color
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
      <button className="vehicle-btn">Identify Vehicle</button>
    </main>
  );
};

export default Vehicle;
