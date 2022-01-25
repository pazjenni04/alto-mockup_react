import React from "react";
import data from "../../assets/data/mission.json";

const vehicleData = data.map((data) => {
  return (
    <div key={data.vehicle}>
      <h2 className="vehicle-license">{data.vehicle.license}</h2>
      <hr></hr>
      <div className="row">
        <p className="col-6">
          <span className="vehicle-subs">Make / Model</span>{" "}
          <div class="w-100"></div>
          <span className="vehicle-info">{data.vehicle.make}</span>
        </p>
        <p className="col-6">
          <span className="vehicle-subs">Color</span> <div class="w-100"></div>
          <span className="vehicle-info">{data.vehicle.color}</span>
        </p>
      </div>
    </div>
  );
});

export default vehicleData;
