import React from "react";
import data from "../../assets/data/mission.json";

// loops through json array and renders the dropoff location name and time of arrival
const destinationData = data.map((data) => {
  return (
    <div className="navbar navbar-fixed-bottom" key={data.trip}>
      <p>{data.trip.dropoff_location.name}</p>
      {/* need to reformat this time - converted in helper but need to apply */}
      <p>ETA:{data.trip.estimated_arrival}</p>
    </div>
  );
});

export default destinationData;