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
    <div className="nav-container row clearfix text-align: center">
      <img
        src={profile}
        alt="profileIcon"
        className="profile-icon col-1 float-start"
      />
      <div className="col-6 align-items-end text-center">
        <div className="route-dropoff text-center ">{destinationData}</div>
      </div>
      <img src={vibes} alt="vibesIcon" className=" vibesIcon col-1 float-end" />
    </div>
  );
};

export default Footer;
