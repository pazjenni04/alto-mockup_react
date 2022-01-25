import React from "react";
import dropffInfo from "../Map/dropoff-info";
import "../styles/trip.css";
import tripData from "./trip-details";

const Trip = () => {
  return (
    <main className="trip-container">
      <h1 className="row trip-title">Your Trip</h1>
      <div className="row dropoff-info">{dropffInfo}</div>

      <hr></hr>
      <div className="row trip-details">{tripData}</div>
      <div className="pickup-location"></div>
    </main>
  );
};

export default Trip;
