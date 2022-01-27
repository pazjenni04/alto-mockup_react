import { useState } from "react";
import React from "react";
import map from "../assets/images/Map_overview.png";
import dropffInfo from "./dropoffInfo";
import "../components/styles/map.css";
import mapIcon from "../assets/images/Map_icon.png";

// renders the map section of the app - shows map and the current vibe for the customer
const Map = () => {
  // updates vibe for passenger
  const [currentVibe, setCurrentVibe] = useState("Vaporwave Beats");

  //depending on what vibe customer is on, will update when button clicked
  const newVibe = (e) => {
    e.preventDefault();
    let vibe = "Sanctuary";
    let vibe2 = "Vaporwave Beats";

    if (currentVibe === "Vaporwave Beats") {
      return setCurrentVibe(vibe);
    } else if (currentVibe !== "Vaporwave Beats") {
      return setCurrentVibe(vibe2);
    }
  };

  return (
    <main className="container">
      <div className="map-container">
        <img
          src={map}
          alt="Map-overview"
          className="img-fluid mx-auto d-block map"
        />
      </div>
      <img src={mapIcon} alt="map-icon" className="map-icon" />
      <h1 className="map-title">Your Trip</h1>
      <div className="eta-map">{dropffInfo} </div>
      <hr></hr>
      <h2 className="vibe-title">Current Vibe</h2>
      <div>
        {" "}
        <div
          className="vibe"
          onChange={(event) => setCurrentVibe(event.target.value)}
        >
          {currentVibe}
        </div>
        <button onClick={newVibe} className="vibe-btn">
          Change Vehicle Vibe
        </button>
      </div>
    </main>
  );
};

export default Map;
