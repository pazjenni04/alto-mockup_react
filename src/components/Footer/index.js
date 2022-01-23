import { useEffect, useState } from "react";
import React from "react";
import profile from "../../assets/images/Profile_icon.png";
import vibes from "../../assets/images/Vibes_icon.png";
import destinationData from "./destination";

const Footer = () => {
  // const [dropoff, setDropoff] = React.useState("");
  // const [arrival, setArrival] = useState("");

  // useEffect(() => {
  //   if()

  // })

  return (
    <footer>
      <div className="bottom-nav">
        <div className="nav-container">
          <img src={profile} alt="profileIcon" />
          <div className="dropoff-location">{destinationData}</div>
          <img src={vibes} alt="vibesIcon" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
