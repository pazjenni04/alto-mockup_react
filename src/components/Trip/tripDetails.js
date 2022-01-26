import React from "react";
import data from "../../assets/data/mission.json";

const tripData = data.map((data) => {
  return (
    <div className="row trip-info" key={data.trip}>
      <div className="col-4 trip-fare">
        <hr className="w-50"></hr>
        <p className="trip-sub">Estimated Fare:</p>
        <p className="trip-details">
          {data.trip.estimated_fare_min} - {data.trip.estimated_fare_max}
        </p>
      </div>
      <div className="col-4 trip-passengers">
        <hr className="w-50"></hr>
        <p className="trip-sub">Passengers:</p>
        <p className="trip-details">
          {data.trip.passengers_min} - {data.trip.passengers_max}
        </p>
      </div>
      <div className="col-4 trip-payment">
        <hr className="w-50"></hr>
        <p className="trip-sub">Payment:</p>
        <p className="trip-details">{data.trip.payment}</p>
      </div>
    </div>
  );
});

export default tripData;
