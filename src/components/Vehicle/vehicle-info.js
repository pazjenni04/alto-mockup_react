import React from "react";
import data from "../../assets/data/mission.json";

// mapping through json file and rendering vehicle section data info - vehicle number, make/model, and vehicle color
const vehicleData = data.map((data) => {
  return (
    <div key={data.vehicle} className="justify-content-center">
      <h2 className="vehicle-license">{data.vehicle.license}</h2>
      <div className="row">
        <div className="col-6">
          <hr className="w-75"></hr>
          <span className="vehicle-subs">Make / Model</span>{" "}
          <div className="w-100"></div>
          <span className="vehicle-info">{data.vehicle.make}</span>
        </div>

        <div className="col-6">
          <hr className="w-75"></hr>
          <span className="vehicle-subs">Color</span>{" "}
          <div className="w-100"></div>
          <span className="vehicle-info">{data.vehicle.color}</span>
        </div>
      </div>
    </div>
  );
});

export default vehicleData;
