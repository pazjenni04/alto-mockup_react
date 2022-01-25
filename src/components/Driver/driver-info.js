import React from "react";
import data from "../../assets/data/mission.json";

// loops through json array and renders the dropoff location name and time of arrival
const driverData = data.map((data) => {
  return (
    <div key={data.driver} className="container driver-info">
      <h2 className="driver-name">{data.driver.name}</h2>
      {/* need to reformat this time - converted in helper but need to apply */}
      <p className="driver-bio">{data.driver.bio}</p>
    </div>
  );
});

export default driverData;
