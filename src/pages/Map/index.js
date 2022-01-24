import { useState } from "react";
import React from "react";
import map from "../../assets/images/Map_overview.png";
import vibeData from "./vibe-info";
import dropffInfo from "./dropoff-info";

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
      <img src={map} alt="Map-overview" />
      <h2>YOUR TRIP</h2>
      <div>Estimated time of arrival at {dropffInfo} </div>
      <h3>Current Vibe</h3>
      <div>{vibeData}</div>
      <button onClick={(e) => newVibe}>CHANGE VEHICLE VIBE</button>
    </main>
  );
};

export default Map;
