import React from "react";
import data from "../../assets/data/mission.json";

// loops through json array and renders the dropoff location name and time of arrival
const driverData = data.map((data) => {
  return (
    <div key={data.driver}>
      <h1>{data.driver.name}</h1>
      {/* need to reformat this time - converted in helper but need to apply */}
      <p>{data.driver.bio}</p>
    </div>
  );
});

export default driverData;
