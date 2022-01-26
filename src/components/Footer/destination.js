import React from "react";
import data from "../../assets/data/mission.json";
import Moment from "react-moment";

// loops through json array and renders the dropoff location name and time of arrival
const destinationData = data.map((data) => {
  return (
    <div className="navbar navbar-fixed-bottom" key={data.trip}>
      <div className="dropoff-location">{data.trip.dropoff_location.name}</div>
      <div className="w-100"></div>
      <p className="eta">
        ETA: <Moment format="h:mm a">{data.trip.estimated_arrival}</Moment>
      </p>
    </div>
  );
});

export default destinationData;
