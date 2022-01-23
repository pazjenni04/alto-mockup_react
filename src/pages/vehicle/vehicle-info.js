import React from "react";
import data from "../../assets/data/mission.json";

const vehicleData = data.map((data) => {
  return (
    <div key={data.vehicle}>
      <h1>{data.vehicle.license}</h1>
      <div>
        <div>
          <p>Make / Model</p>
          <p>{data.vehicle.make}</p>
        </div>
        <div>
          <p>Color</p>
          <p>{data.vehicle.color}</p>
        </div>
      </div>
    </div>
  );
});

export default vehicleData;
