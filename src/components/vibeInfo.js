import React from "react";
import data from "../assets/data/mission.json";
import "./styles/trip.css";

// maps through json array and renders the dropoff location name and time of arrival
const vibeData = data.map((data) => {
  return (
    <div>
      <p className="vibe-name" key={data.vibe}>
        {data.vibe.name}
      </p>
    </div>
  );
});

export default vibeData;
