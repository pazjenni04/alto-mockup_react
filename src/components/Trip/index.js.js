import React from "react";
import dropffInfo from "../Map/dropoffInfo";
import "../styles/trip.css";
import notesData from "./notes";
import pickupData from "./pickupDetails";
import tripData from "./tripDetails";
import editIcon from "../../assets/images/Edit_icon.png";

const Trip = () => {
  return (
    <main className="container trip-container mx-auto">
      <h1 className="row trip-title">Your Trip</h1>
      <div className="row dropoff-info">{dropffInfo}</div>
      <div className="row trip-details">{tripData}</div>
      <div className="pickup-location">{pickupData}</div>
      <div className="dest-name">
        <p className="dest">DFW International Airport</p>
        <p className="dest"> American Airlines Terminal E</p>
        <p className="dest">Irving, Texas 75261</p>
      </div>
      <div className="row">
        <p className="col">{notesData}</p>
        <img src={editIcon} alt="editIcon" className="editIcon" />
      </div>

      <button className="trip-btn">Cancel Trip</button>
    </main>
  );
};

export default Trip;
