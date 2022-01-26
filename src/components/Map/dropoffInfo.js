import React from "react";
import data from "../../assets/data/mission.json";
import Moment from "react-moment";

// loops through json array and renders the dropoff location name
const dropffInfo = data.map((data) => {
  return (
    <div key={data.trip}>
      <p className="arrival">
        <Moment format="h:mm a">{data.trip.estimated_arrival}</Moment>
      </p>
      <p className="dropoff-location-info">
        Estimated arrival at {data.trip.dropoff_location.name}
      </p>
    </div>
  );
});

export default dropffInfo;
