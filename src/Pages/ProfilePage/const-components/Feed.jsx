import React, { useState } from "react";
import { useSelector } from "react-redux";
import About from "../changing-feeds/About";
import EditProfile from "../changing-feeds/EditProfile";
// import OfflineFeed from "../ChangingComponents/OfflineFeed";
import Posts from "../changing-feeds/Posts";
import Store from "../changing-feeds/Store";
import StickyComponent from "./StickyComponent";

const Feed = () => {
  const [activeClassIndex, setActiveClassIndex] = useState(0);
  const counterProfile = useSelector((state) => state.profile);

  return (
    <div className="feed">
      {counterProfile ? (
        <EditProfile />
      ) : (
        <div>
          <div className="top-bar">
            <div>
              <h3
                style={{ color: activeClassIndex === 0 ? "#ff8200" : "white" }}
                onClick={() => setActiveClassIndex(0)}
              >
                Feed
              </h3>
            </div>

            <div>
              <h3
                style={{ color: activeClassIndex === 1 ? "#ff8200" : "white" }}
                onClick={() => setActiveClassIndex(1)}
              >
                About
              </h3>
            </div>

            <div>
              <h3
                style={{ color: activeClassIndex === 2 ? "#ff8200" : "white" }}
                onClick={() => setActiveClassIndex(2)}
              >
                My Store
              </h3>
            </div>
          </div>

          <div className="lines">
            <div
              className="moving-line"
              style={
                activeClassIndex === 1
                  ? { transform: "translateX(100px)" }
                  : activeClassIndex === 2
                  ? { transform: "translateX(230px)" }
                  : { transform: "translateX(0px)" }
              }
            ></div>
          </div>
          <div className="changing-div">
            {activeClassIndex === 0 ? (
              <Posts />
            ) : activeClassIndex === 1 ? (
              <About />
            ) : (
              <Store />
            )}
          </div>

          <div className="blur-4"></div>
          <div className="blur-5"></div>

          <StickyComponent />
        </div>
      )}
    </div>
  );
};

export default Feed;
