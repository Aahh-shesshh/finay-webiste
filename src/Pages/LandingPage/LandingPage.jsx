import React from "react";

import Home from "./RightChangingComps/Home";
import sideBarOptionTop from "../../Data/landing-page-data/sidebar-data-top";
import sideBarOptionBottom from "../../Data/landing-page-data/sidebar-data-bottom";

const LandingPage = () => {
  return (
    <div className="landing-page py-3 w-full">
      <div className="">
        <div className="left-nav px-11">
          {sideBarOptionTop.map((option, id) => (
            <div
              key={id}
              className="flex flex-row items-center gap-[20px]  cursor-pointer"
            >
              <option.icon color="white" size={25} />
              <p>{option.name}</p>
            </div>
          ))}
          <hr />
          {sideBarOptionBottom.map((option, id) => (
            <div
              key={id}
              className="flex flex-row items-center gap-[20px]  cursor-pointer"
            >
              <option.icon color="white" size={25} />
              <p>{option.name}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="col2 w-[1300px]">
        {" "}
        <Home />
      </div>
      <div className="blur-4"></div>
      <div className="blur-5"></div>
    </div>
  );
};

export default LandingPage;
