import { useEffect, useState } from "react";
import React from "react";
import profile from "../../assets/images/Profile_icon.png";
import vibes from "../../assets/images/Vibes_icon.png";
import destinationData from "./destination";
import "../styles/footer.css";

const Footer = () => {
  // const [dropoff, setDropoff] = React.useState("");
  // const [arrival, setArrival] = useState("");

  // useEffect(() => {
  //   if()

  // })

  return (
    <div className="nav-container">
      <img
        src={profile}
        alt="profileIcon"
        className="profile-icon float-left"
      />
      <span className="route-dropoff float-left">{destinationData}</span>
      <img src={vibes} alt="vibesIcon" className="float-left vibesIcon" />
    </div>
  );
};

export default Footer;
