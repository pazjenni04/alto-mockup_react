import React from "react";
import data from "../../assets/data/mission.json";
import Moment from "react-moment";

// maps through json array and renders the dropoff location name and the time of arrival
const dropffInfo = data.map((data) => {
  return (
    <div key={data.trip}>
      <div className="arrival">
        <Moment format="h:mm a" className="arrival-time">
          {data.trip.estimated_arrival}
        </Moment>
      </div>
      <p className="dropoff-location-info">
        Estimated arrival at {data.trip.dropoff_location.name}
      </p>
    </div>
  );
});

export default dropffInfo;
