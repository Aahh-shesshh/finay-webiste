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

  return (
    <div className="landing-page">
      <div className="col1">
        <div className="left-nav">
          <div
            onClick={() => setActiveNav(1)}
            className="flex flex-row items-center gap-[20px]  cursor-pointer"
          >
            <AiFillHome
              style={{
                color: activeNav === 1 ? "orange" : "rgba(255, 255, 255, 0.6)",
              }}
              className="home-icon"
            />
            <p
              style={{
                color: activeNav === 1 ? "orange" : "rgba(255, 255, 255, 0.6)",
              }}
            >
              Home
            </p>
          </div>
          <div
            onClick={() => setActiveNav(2)}
            className="flex flex-row items-center gap-[20px]  cursor-pointer"
          >
            <BsFillPeopleFill
              style={{
                color: activeNav === 2 ? "orange" : "rgba(255, 255, 255, 0.6)",
              }}
              className="home-icon"
            />
            <p
              style={{
                color: activeNav === 2 ? "orange" : "rgba(255, 255, 255, 0.6)",
              }}
            >
              Community
            </p>
          </div>
          <div
            onClick={() => setActiveNav(3)}
            className="flex flex-row items-center gap-[20px]  cursor-pointer"
          >
            <MdOutlineExplore
              style={{
                color: activeNav === 3 ? "orange" : "rgba(255, 255, 255, 0.6)",
              }}
              className="home-icon"
            />
            <p
              style={{
                color: activeNav === 3 ? "orange" : "rgba(255, 255, 255, 0.6)",
              }}
            >
              Explore
            </p>
          </div>
          <div
            onClick={() => setActiveNav(4)}
            className="flex flex-row items-center gap-[20px]  cursor-pointer"
          >
            <MdStorefront
              style={{
                color: activeNav === 4 ? "orange" : "rgba(255, 255, 255, 0.6)",
              }}
              className="home-icon"
            />
            <p
              style={{
                color: activeNav === 4 ? "orange" : "rgba(255, 255, 255, 0.6)",
              }}
            >
              Store
            </p>
          </div>
          <div
            onClick={() => setActiveNav(5)}
            className="flex flex-row items-center gap-[20px]  cursor-pointer"
          >
            <MdLibraryMusic
              style={{
                color: activeNav === 5 ? "orange" : "rgba(255, 255, 255, 0.6)",
              }}
              className="home-icon"
            />
            <p
              style={{
                color: activeNav === 5 ? "orange" : "rgba(255, 255, 255, 0.6)",
              }}
            >
              Library
            </p>
          </div>
          <hr />
          <div
            onClick={() => setActiveNav(6)}
            className="flex flex-row items-center gap-[20px]  cursor-pointer"
          >
            <BsFillCollectionPlayFill
              style={{
                color: activeNav === 6 ? "orange" : "rgba(255, 255, 255, 0.6)",
              }}
              className="home-icon"
            />
            <p
              style={{
                color: activeNav === 6 ? "orange" : "rgba(255, 255, 255, 0.6)",
              }}
            >
              Saved
            </p>
          </div>
          <div
            onClick={() => setActiveNav(7)}
            className="flex flex-row items-center gap-[20px]  cursor-pointer"
          >
            <SlCalender
              style={{
                color: activeNav === 7 ? "orange" : "rgba(255, 255, 255, 0.6)",
              }}
              className="home-icon"
            />
            <p
              style={{
                color: activeNav === 7 ? "orange" : "rgba(255, 255, 255, 0.6)",
              }}
            >
              Calender
            </p>
          </div>
          <div
            onClick={() => setActiveNav(8)}
            className="flex flex-row items-center gap-[20px]  cursor-pointer"
          >
            <CgProfile
              style={{
                color: activeNav === 8 ? "orange" : "rgba(255, 255, 255, 0.6)",
              }}
              className="home-icon"
            />
            <p
              style={{
                color: activeNav === 8 ? "orange" : "rgba(255, 255, 255, 0.6)",
              }}
            >
              Profile
            </p>
          </div>
          <div
            onClick={() => setActiveNav(9)}
            className="flex flex-row items-center gap-[20px]  cursor-pointer"
          >
            <RiSettings5Fill
              style={{
                color: activeNav === 9 ? "orange" : "rgba(255, 255, 255, 0.6)",
              }}
              className="home-icon"
            />
            <p
              style={{
                color: activeNav === 9 ? "orange" : "rgba(255, 255, 255, 0.6)",
              }}
            >
              Settings
            </p>
          </div>
          <div
            onClick={() => setActiveNav(10)}
            className="flex flex-row items-center gap-[20px]  cursor-pointer"
          >
            <BsDiscord
              style={{
                color: activeNav === 10 ? "orange" : "rgba(255, 255, 255, 0.6)",
              }}
              className="home-icon"
            />
            <p
              style={{
                color: activeNav === 10 ? "orange" : "rgba(255, 255, 255, 0.6)",
              }}
            >
              Discord
            </p>
          </div>
          <Link to="/LoginPage">
            <div
              onClick={() => setActiveNav(11)}
              className="flex flex-row items-center gap-[20px]  cursor-pointer"
            >
              <FiLogOut
                style={{
                  color:
                    activeNav === 11 ? "orange" : "rgba(255, 255, 255, 0.6)",
                }}
                className="home-icon"
              />
              <p
                style={{
                  color:
                    activeNav === 11 ? "orange" : "rgba(255, 255, 255, 0.6)",
                }}
              >
                Log out
              </p>
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
