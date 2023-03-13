import React from "react";
import { BiChevronLeft } from "react-icons/bi";

const LeftBar = () => {
  return (
    <div className="left-bar-main">
      <div className="logo-div">
        <BiChevronLeft className="BiChevronLeft"/>
        <div className="icon1"></div><div className="icon2"></div>
      </div>
      <div className="leftbar-text-div">
        <h3>
          Get Your free<span> NFT</span>
        </h3>
        <p>
          Get your first NFT free! Create an account and be entered to win one
          of 5,000 limited edition songs.
        </p>
      </div>
      <div className="img-div">
        <img src="images/Left.jpg" alt="left" ></img>
        {/* <div className="spiral"></div> */}
        <div className="blur"></div>
      </div>
    </div>
  );
};

export default LeftBar;
