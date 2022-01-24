import { useEffect, useState } from "react";
import React from "react";
import profile from "../../assets/images/Profile_icon.png";
import vibes from "../../assets/images/Vibes_icon.png";
import destinationData from "./destination";
import "../../styles/footer.css";

const Footer = () => {
  // const [dropoff, setDropoff] = React.useState("");
  // const [arrival, setArrival] = useState("");

  // useEffect(() => {
  //   if()

  // })

  return (
    <footer className="bottom-nav">
      <div className="row flex-grow-1 nav-container">
        <img
          src={profile}
          alt="profileIcon"
          className="profile-icon flex-grow-1"
        />
        <span className="route-dropoff">{destinationData}</span>
        <img src={vibes} alt="vibesIcon" className="vibesIcon" />
      </div>
    </footer>
  );
};

export default Footer;
