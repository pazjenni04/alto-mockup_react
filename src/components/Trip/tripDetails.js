import React from "react";
import { useEffect, useState } from "react";
import data from "../../assets/data/mission.json";
import infoIcon from "../../assets/images/Info_icon.png";

// maps through the trip data info - renders the max/min of trip fare, the amt of passengers can seat, and the payment type
const tripData = data.map((data) => {
  // function setToString(number) {
  //   let str = number.setToString();
  //   console.log(typeof str);
  //   console.log("this works");
  // }

  return (
    <div className="row trip-info" key={data.trip}>
      <div className="col-4 trip-fare">
        <hr className="w-75 top-line"></hr>
        <p className="trip-sub">Estimated Fare:</p>
        <p className="trip-details">
          <span>$</span>
          {/* divides fare by 100 to remove unecessary trailing zeros */}
          {data.trip.estimated_fare_min / 100} - <span>$</span>
          {data.trip.estimated_fare_max / 100}
        </p>
        <img src={infoIcon} alt="info-icon" className="row info-icon" />
      </div>

      <div className="col-4 trip-passengers">
        <hr className="w-75 top-line"></hr>
        <p className="trip-sub">Passengers:</p>
        <p className="trip-details">
          {data.trip.passengers_min} - {data.trip.passengers_max}{" "}
        </p>
      </div>
      <div className="col-4 trip-payment">
        <hr className="w-75 top-line"></hr>
        <p className="trip-sub">Payment:</p>
        <p className="trip-details">{data.trip.payment}</p>
      </div>
    </div>
  );
});

export default tripData;
