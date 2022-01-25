import React from "react";
import Trip from "../components/Trip/index.js";
import Driver from "../components/Driver/index.js";
import Map from "../components/Map/index.js";
import Vehicle from "../components/Vehicle/index.js";

const Main = () => {
  return (
    <main>
      {/* <Trip /> */}
      <Driver />
      <Map />
      {/* <Vechicle /> */}
    </main>
  );
};

export default Main;