import React from "react";
import Feed from "./const-components/Feed";
import MiddleDiv from "./const-components/MiddleDiv";
import ProfileFooter from "./const-components/ProfileFooter";
import { useSelector } from "react-redux";
import TopNav from "./const-components/TopNav";
import Settings from "./const-components/Settings";
import LandingPage from "../LandingPage/LandingPage";

const ProfilePage = () => {
  const settingsShow = useSelector((state) => state.settings);
  const homeShow = useSelector((state) => state.home);

 
 
  return (
    <div className="profile-page overflowy-hidden">
      <TopNav />

      {settingsShow ? (
        <Settings />
      ) : !homeShow ? (
        <>
          <MiddleDiv />
          <Feed />
        </>
      ) : <LandingPage /> }

      <ProfileFooter />
    </div>
  );
};

export default ProfilePage;
