import React from "react";
import data from "../../assets/data/mission.json";

const tripData = data.map((data) => {
  return (
    <div className="row align-items-center trip-details" key={data.trip}>
      <div className="col trip-fare">
        <span>Estimated Fare: </span>
        <div class="w-100"></div>
        <span>
          {data.trip.estimated_fare_min} - {data.trip.estimated_fare_max}
        </span>
      </div>
      <div className="col trip-passengers">
        {" "}
        <span>Passengers:</span>
        <div class="w-100"></div>{" "}
        <span>
          {data.trip.passengers_min} - {data.trip.passengers_max}
        </span>
      </div>
      <div className="col trip-payment">
        {" "}
        <span>Payment:</span> <div class="w-100"></div>
        <span>{data.trip.payment}</span>
      </div>
    </div>
  );
});

export default tripData;
