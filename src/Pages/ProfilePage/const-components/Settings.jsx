import React, { useState } from "react";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { setFalse } from "../../../Store/Slices/SettingsSlice";
import Account from "../SettingsComps/Account";
import Notification from "../SettingsComps/Notification";
import Privacy from "../SettingsComps/Privacy";
import Security from "../SettingsComps/Security";
import SocialMedia from "../SettingsComps/SocialMedia";
import Wallet from "../SettingsComps/Wallet";

const Settings = () => {
  const dispatch = useDispatch();
  const [selectedOptionIndex, setSelectedOptionIndex] = useState(1);

  return (
    <div className="settings">
      <div
        className="items-center flex flex-row ml-32  gap-3  pt-12 cursor-pointer"
        onClick={() => dispatch(setFalse())}
      >
        <AiOutlineArrowLeft className="text-white" />
        <h4 className="text-white">Back</h4>
      </div>
      <div className="main-setting">
        <div className="left-const-div">
          <h3>Settings</h3>
          <div
            className="settings-options"
            onClick={() => setSelectedOptionIndex(1)}
            style={{
              backgroundColor: selectedOptionIndex === 1 ? "#FF8200" : null,
              color: selectedOptionIndex !== 1 ? "#9E9E9E" : "black",
            }}
          >
            <h5>Accountant</h5>
          </div>
          <div
            className="settings-options"
            onClick={() => setSelectedOptionIndex(2)}
            style={{
              backgroundColor: selectedOptionIndex === 2 ? "#FF8200" : null,
              color: selectedOptionIndex !== 2 ? "#9E9E9E" : "black",
            }}
          >
            <h5>Security</h5>
          </div>
          <div
            className="settings-options"
            onClick={() => setSelectedOptionIndex(3)}
            style={{
              backgroundColor: selectedOptionIndex === 3 ? "#FF8200" : null,
              color: selectedOptionIndex !== 3 ? "#9E9E9E" : "black",
            }}
          >
            <h5>Wallet</h5>
          </div>
          <div
            className="settings-options"
            onClick={() => setSelectedOptionIndex(4)}
            style={{
              backgroundColor: selectedOptionIndex === 4 ? "#FF8200" : null,
              color: selectedOptionIndex !== 4 ? "#9E9E9E" : "black",
            }}
          >
            <h5>Social Media</h5>
          </div>
          <div
            className="settings-options"
            onClick={() => setSelectedOptionIndex(5)}
            style={{
              backgroundColor: selectedOptionIndex === 5 ? "#FF8200" : null,
              color: selectedOptionIndex !== 5 ? "#9E9E9E" : "black",
            }}
          >
            <h5>Privacy and Saftey</h5>
          </div>
          <div
            className="settings-options"
            onClick={() => setSelectedOptionIndex(6)}
            style={{
              backgroundColor: selectedOptionIndex === 6 ? "#FF8200" : null,
              color: selectedOptionIndex !== 6 ? "#9E9E9E" : "black",
            }}
          >
            <h5>Notification</h5>
          </div>
        </div>
        <div className="changing-divs">
          {selectedOptionIndex === 1 ? (
            <Account />
          ) : selectedOptionIndex === 2 ? (
            <Security />
          ) : selectedOptionIndex === 3 ? (
            <Wallet />
          ) : selectedOptionIndex === 4 ? (
            <SocialMedia />
          ) : selectedOptionIndex === 5 ? (
            <Privacy />
          ) : (
            <Notification />
          )}
        </div>
      </div>
      <div className="blur-4"></div>
      <div className="blur-5"></div>
    </div>
  );
};

export default Settings;
