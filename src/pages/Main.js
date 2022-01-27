import React from "react";
import Trip from "../components/Trip/index.js";
import Driver from "../components/Driver/index.js";
import Map from "../components/mapInfo";
import Vehicle from "../components/Vehicle/index.js";

const Main = () => {
  return (
    <>
      <main>
        <Driver />
        <Map />
        <Vehicle />
        <Trip />
      </main>
    </>
  );
};

export default Main;
