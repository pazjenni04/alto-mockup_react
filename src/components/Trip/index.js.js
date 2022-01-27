import React from "react";
import dropffInfo from "../dropoffInfo";
import "../styles/trip.css";
import notesData from "./notes";
import pickupData from "./pickupDetails";
import tripData from "./tripDetails";
import editIcon from "../../assets/images/Edit_icon.png";

// renders the trip information in the app section - displays customer's dropoff info, their trip data (location, time of arrival), and pick up information
const Trip = () => {
  return (
    <main className="container trip-container mx-auto justify-content-center">
      <h1 className="row trip-title">Your Trip</h1>
      <div className="row dropoff-info">{dropffInfo}</div>
      <div className="row trip-details">{tripData}</div>
      <div className="pickup-location">{pickupData}</div>
      <div className="dest-name">
        <p className="dest">DFW International Airport</p>
        <p className="dest"> American Airlines Terminal E</p>
        <p className="dest">Irving, Texas 75261</p>
      </div>
      {/* renders the notes portion of the trip section that the customer inputted */}
      <div className="row">
        <p className="col">{notesData}</p>
        <img src={editIcon} alt="editIcon" className="editIcon" />
      </div>

      <button className="trip-btn">Cancel Trip</button>
    </main>
  );
};

export default Trip;
