import React from "react";
import data from "../../assets/data/mission.json";

// maps through json array and renders the driver's name and bio
const driverData = data.map((data) => {
  return (
    <div key={data.driver} className="container driver-info">
      <h2 className="driver-name">{data.driver.name}</h2>
      <hr className="w-25 top-line"></hr>
      <p className="driver-bio">{data.driver.bio}</p>
    </div>
  );
});

export default driverData;
