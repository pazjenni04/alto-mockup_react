import { useEffect, useState } from "react";
import React from "react";
import profile from "../assets/images/Profile_icon.png";
import vibes from "../assets/images/Vibes_icon.png";
import bottomNavContent from "./bottomNavContent";
import "./styles/bottomNavbar.css";

const BottomNavbar = () => {
  // const [dropoff, setDropoff] = React.useState("");
  // const [arrival, setArrival] = useState("");

  // useEffect(() => {
  //   if()

  // })

  return (
    <div className="fixed-bottom nav-container">
      <img
        src={profile}
        alt="profileIcon"
        className="profile-icon align-items-start col d-inline fixed-bottom"
      />
      <div className="col-10">
        <div className="route-dropoff">{bottomNavContent}</div>
      </div>
      <img
        src={vibes}
        alt="vibesIcon"
        className=" vibesIcon float-end col d-inline"
      />
    </div>
  );
};

export default BottomNavbar;
