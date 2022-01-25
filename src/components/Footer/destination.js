import React from "react";
import data from "../../assets/data/mission.json";
import { reformatTime } from "../../helpers/utils";

// loops through json array and renders the dropoff location name and time of arrival
const destinationData = data.map((data) => {
  return (
    <div className="navbar navbar-fixed-bottom" key={data.trip}>
      <div className="dropoff-location">{data.trip.dropoff_location.name}</div>
      <div className="w-100"></div>
      {/* need to reformat this time - converted in helper but need to apply */}
      <div className="eta"> ETA: {data.trip.estimated_arrival}</div>
    </div>
  );
});

export default destinationData;
