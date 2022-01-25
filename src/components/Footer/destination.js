import React from "react";
import data from "../../assets/data/mission.json";
import { reformatTime } from "../../helpers/utils";

// loops through json array and renders the dropoff location name and time of arrival
const destinationData = data.map((data) => {
  return (
    <div className="navbar navbar-fixed-bottom" key={data.trip}>
      <p className="dropoff-location">{data.trip.dropoff_location.name}</p>
      {/* need to reformat this time - converted in helper but need to apply */}
      <p className="eta"> ETA: {data.trip.estimated_arrival}</p>
    </div>
  );
});

export default destinationData;
