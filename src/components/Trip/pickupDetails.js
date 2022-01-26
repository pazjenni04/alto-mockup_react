import React from "react";
import data from "../../assets/data/mission.json";

// loops through json array and renders the pickup location information
const pickupData = data.map((data) => {
  return (
    <div key={data.trip} className="pickup-info">
      <span className="street-info">
        {data.trip.pickup_location.street_line1}
      </span>

      <p className="city-state-zip">
        {data.trip.pickup_location.city}, {data.trip.pickup_location.state}{" "}
        {data.trip.pickup_location.zipcode}
      </p>

      <hr className="w-25"></hr>
    </div>
  );
});

export default pickupData;
