import React from "react";
import data from "../../assets/data/mission.json";

// loops through json array and renders the dropoff location name and time of arrival
const dropffInfo = data.map((data) => {
  return (
    <div className="dropoff-location-info" key={data.trip}>
      <span>{data.trip.dropoff_location.name}</span>
    </div>
  );
});

export default dropffInfo;
