import { useState } from "react";
import React from "react";
import map from "../../assets/images/Map_overview.png";
import vibeData from "./vibe-info";
import dropffInfo from "./dropoff-info";
import "../styles/map.css";

const Map = () => {
  // updates vibe for passanger
  const [updateVibe, setUpdateVibe] = React.useState("");

  //sets vibe to Vaporwave Beats
  const currentVibe = () => {
    setUpdateVibe(vibeData);
  };

  const newVibe = () => {
    setUpdateVibe("Sanctuary");
  };

  // if(currentVibe){

  // }

  return (
    <main>
      <img
        src={map}
        alt="Map-overview"
        className="img-fluid mx-auto d-block map"
      />
      <h1 className="map-title">Your Trip</h1>
      <div className="eta-map">Estimated time of arrival at {dropffInfo} </div>
      <h2>Current Vibe</h2>
      <div>{vibeData}</div>
      <button onClick={(e) => newVibe} className="vibe-btn">
        Change Vehicle Vibe
      </button>
    </main>
  );
};

export default Map;
