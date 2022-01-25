import React from "react";
import data from "../../assets/data/mission.json";

const tripData = data.map((data) => {
  return (
    <div className="row align-items-center trip-info" key={data.trip}>
      <div className="col-4 trip-fare">
        <span className="trip-sub">Estimated Fare: </span>
        <div className="w-100"></div>
        <span className="trip-details">
          {data.trip.estimated_fare_min} - {data.trip.estimated_fare_max}
        </span>
      </div>
      <div className="col-4 trip-passengers">
        {" "}
        <span className="trip-sub">Passengers:</span>
        <div className="w-100"></div>{" "}
        <span className="trip-details">
          {data.trip.passengers_min} - {data.trip.passengers_max}
        </span>
      </div>
      <div className="col-4 trip-payment">
        {" "}
        <span className="trip-sub">Payment:</span> <div className="w-100"></div>
        <span className="trip-details">{data.trip.payment}</span>
      </div>
    </div>
  );
});

export default tripData;
