import React from "react";
import data from "../../assets/data/mission.json";

const vehicleData = data.map((data) => {
  return (
    <div key={data.vehicle}>
      <h2 className="vehicle-license">{data.vehicle.license}</h2>
      <hr></hr>
      <div className="row">
        <div className="col-6">
          <span className="vehicle-subs">Make / Model</span>{" "}
          <div className="w-100"></div>
          <span className="vehicle-info">{data.vehicle.make}</span>
        </div>
        <div className="col-6">
          <span className="vehicle-subs">Color</span>{" "}
          <div className="w-100"></div>
          <span className="vehicle-info">{data.vehicle.color}</span>
        </div>
      </div>
    </div>
  );
});

export default vehicleData;
