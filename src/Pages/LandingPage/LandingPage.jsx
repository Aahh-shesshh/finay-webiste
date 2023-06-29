import React, { useState } from "react";
import { RiSettings5Fill } from "react-icons/ri";
import { AiFillHome } from "react-icons/ai";

import {
  BsFillPeopleFill,
  BsDiscord,
  BsFillCollectionPlayFill,
} from "react-icons/bs";
import { MdOutlineExplore, MdStorefront, MdLibraryMusic } from "react-icons/md";
import { SlCalender } from "react-icons/sl";
import { CgProfile } from "react-icons/cg";
import { FiLogOut } from "react-icons/fi";
import Home from "./RightChangingComps/Home";
import { Link } from "react-router-dom";

const LandingPage = () => {
  const [activeNav, setActiveNav] = useState(1);
  const styleForHome = {
    color: activeNav === 1 ? "orange" : "rgba(255, 255, 255, 0.6)",
  };
  const styleForCommunity = {
    color: activeNav === 2 ? "orange" : "rgba(255, 255, 255, 0.6)",
  };
  const styleForExplore = {
    color: activeNav === 3 ? "orange" : "rgba(255, 255, 255, 0.6)",
  };
  const styleForStore = {
    color: activeNav === 4 ? "orange" : "rgba(255, 255, 255, 0.6)",
  };
  const styleForLibrary = {
    color: activeNav === 5 ? "orange" : "rgba(255, 255, 255, 0.6)",
  };
  const styleForSaved = {
    color: activeNav === 6 ? "orange" : "rgba(255, 255, 255, 0.6)",
  };
  const styleForCalender = {
    color: activeNav === 7 ? "orange" : "rgba(255, 255, 255, 0.6)",
  };
  const styleForProfile = {
    color: activeNav === 8 ? "orange" : "rgba(255, 255, 255, 0.6)",
  };
  const styleForSettings = {
    color: activeNav === 9 ? "orange" : "rgba(255, 255, 255, 0.6)",
  };
  const styleForDiscord = {
    color: activeNav === 10 ? "orange" : "rgba(255, 255, 255, 0.6)",
  };
  const styleForLogout = {
    color: activeNav === 11 ? "orange" : "rgba(255, 255, 255, 0.6)",
  };

  return (
    <div className="landing-page py-5">
      <div className="col1">
        <div className="left-nav">
          <div
            onClick={() => setActiveNav(1)}
            className="flex flex-row items-center gap-[20px]  cursor-pointer"
          >
            <AiFillHome style={styleForHome} className="home-icon" />
            <p style={styleForHome}>Home</p>
          </div>
          <div
            onClick={() => setActiveNav(2)}
            className="flex flex-row items-center gap-[20px]  cursor-pointer"
          >
            <BsFillPeopleFill style={styleForCommunity} className="home-icon" />
            <p style={styleForCommunity}>Community</p>
          </div>
          <div
            onClick={() => setActiveNav(3)}
            className="flex flex-row items-center gap-[20px]  cursor-pointer"
          >
            <MdOutlineExplore style={styleForExplore} className="home-icon" />
            <p style={styleForExplore}>Explore</p>
          </div>
          <div
            onClick={() => setActiveNav(4)}
            className="flex flex-row items-center gap-[20px]  cursor-pointer"
          >
            <MdStorefront style={styleForStore} className="home-icon" />
            <p style={styleForStore}>Store</p>
          </div>
          <div
            onClick={() => setActiveNav(5)}
            className="flex flex-row items-center gap-[20px]  cursor-pointer"
          >
            <MdLibraryMusic style={styleForLibrary} className="home-icon" />
            <p style={styleForLibrary}>Library</p>
          </div>
          <hr />
          <div
            onClick={() => setActiveNav(6)}
            className="flex flex-row items-center gap-[20px]  cursor-pointer"
          >
            <BsFillCollectionPlayFill
              style={styleForSaved}
              className="home-icon"
            />
            <p style={styleForSaved}>Saved</p>
          </div>
          <div
            onClick={() => setActiveNav(7)}
            className="flex flex-row items-center gap-[20px]  cursor-pointer"
          >
            <SlCalender style={styleForCalender} className="home-icon" />
            <p style={styleForCalender}>Calender</p>
          </div>
          <div
            onClick={() => setActiveNav(8)}
            className="flex flex-row items-center gap-[20px]  cursor-pointer"
          >
            <CgProfile style={styleForProfile} className="home-icon" />
            <p style={styleForProfile}>Profile</p>
          </div>
          <div
            onClick={() => setActiveNav(9)}
            className="flex flex-row items-center gap-[20px]  cursor-pointer"
          >
            <RiSettings5Fill style={styleForSettings} className="home-icon" />
            <p style={styleForSettings}>Settings</p>
          </div>
          <div
            onClick={() => setActiveNav(10)}
            className="flex flex-row items-center gap-[20px]  cursor-pointer"
          >
            <BsDiscord style={styleForDiscord} className="home-icon" />
            <p style={styleForDiscord}>Discord</p>
          </div>
          <Link to="/LoginPage">
            <div
              onClick={() => setActiveNav(11)}
              className="flex flex-row items-center gap-[20px]  cursor-pointer"
            >
              <FiLogOut style={styleForLogout} className="home-icon" />
              <p style={styleForLogout}>Log out</p>
            </div>
          </Link>
        </div>
      </div>

      <div className="col2">{activeNav === 1 ? <Home /> : null}</div>
      <div className="blur-4"></div>
      <div className="blur-5"></div>
    </div>
  );
};

export default LandingPage;
