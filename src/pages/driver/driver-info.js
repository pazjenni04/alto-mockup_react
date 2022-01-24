import React from "react";
import data from "../../assets/data/mission.json";

// loops through json array and renders the dropoff location name and time of arrival
const driverData = data.map((data) => {
  return (
    <div key={data.driver} className="container driver-info">
      <h1 className="col driver-name-info">{data.driver.name}</h1>
      {/* need to reformat this time - converted in helper but need to apply */}
      <p className="col driver-bio-info">{data.driver.bio}</p>
    </div>
  );
});

export default driverData;
